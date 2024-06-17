const fetch = require('node-fetch');
const properties = require('./properties-copy'); // Importing properties from JSON file

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

  for (const property of properties) {
    const address = property['Street Address'];
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

  console.log('Updated Properties:', JSON.stringify(updatedProperties, null, 2));
};

main();