const fs = require('fs');
const fetch = require('node-fetch');
const propertiesData = require('./output'); // Importing properties 
const util = require('util');

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

const main = async () => {
  const updatedProperties = [];
  let counter = 0;

  for (const property of propertiesData) {
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

  // Write properties to a file as JavaScript object
  
  const outputString = `export const properties = ${util.inspect(updatedProperties, { depth: null, colors: false })};`;

  // Write the string representation to a .js file
  const outputFilePath = 'updatedProperties.js'; // Define output file path
  fs.writeFile(outputFilePath, outputString, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log(`Updated properties saved to ${outputFilePath}`);
    }
  });
};

main();