const fs = require('fs');
const fetch = require('node-fetch');
const properties = require('./output'); // Importing properties 

const fetchCoordinates = async (address) => {
  const apiUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(address)}&format=json`;
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    if (data && data.length > 0) {
      const coordinates = {
        lat: parseFloat(data[0].lat),
        lon: parseFloat(data[0].lon),
      };
      return coordinates;
    } else {
      throw new Error('Coordinates not found for the provided address.');
    }
  } catch (error) {
    console.error('Error fetching coordinates:', error);
    throw error;
  }
};

const chunkArray = (arr, chunkSize) => {
  const chunks = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    chunks.push(arr.slice(i, i + chunkSize));
  }
  return chunks;
};

const writePropertiesChunkToFile = async (propertiesChunk, filePath) => {
  return new Promise((resolve, reject) => {
    const stream = fs.createWriteStream(filePath, { flags: 'a' }); // Append mode
    propertiesChunk.forEach(property => {
      const objectString = `{\n${Object.entries(property).map(([key, value]) => `  ${key}: ${JSON.stringify(value)},`).join('\n')}\n},\n`;
      stream.write(objectString);
    });
    stream.end(() => {
      resolve();
    });
    stream.on('error', err => {
      reject(err);
    });
  });
};

const main = async () => {
  const chunkSize = 99; // Adjust chunk size as needed
  let counter = 0;

  // Split properties array into chunks
  const chunks = chunkArray(properties[0], chunkSize);

  for (const chunk of chunks) {
    const updatedProperties = [];
    for (const property of chunk) {
      const address = property['street_address']; // Corrected key name
      try {
        const coords = await fetchCoordinates(address);
        const updatedProperty = {
          ...property,
          coordinates: coords,
        };
        updatedProperties.push(updatedProperty);
      } catch (error) {
        console.log(`Failed to fetch coordinates for address: ${address}`);
        const updatedProperty = {
          ...property,
          coordinates: null,
        };
        updatedProperties.push(updatedProperty);
      }

      // Increment counter and print the current number
      counter++;
      console.log(`Processed ${counter} properties`);
    }

    // Write properties chunk to file
    const outputFile = `updatedProperties_${counter}.js`; // Updated output file path
    try {
      await writePropertiesChunkToFile(updatedProperties, outputFile);
      console.log(`Updated properties saved to ${outputFile}`);
    } catch (error) {
      console.error('Error writing file:', error);
    }
  }

  console.log('All properties files have been saved.');
};

main();