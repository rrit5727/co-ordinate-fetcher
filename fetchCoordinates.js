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

const formatProperty = (property) => {
  const formattedProperty = {};
  for (const [key, value] of Object.entries(property)) {
    const formattedValue = typeof value === 'string' ? value : value;
    // Remove quotes from keys
    const formattedKey = key.replace(/"/g, '').replace(/ /g, '_').toLowerCase();
    formattedProperty[formattedKey] = formattedValue;
  }
  return formattedProperty;
};

const main = async () => {
  const updatedProperties = [];
  let counter = 0;

  for (const property of properties) {
    const address = property['Street Address']; // Corrected key name
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

  // Format output properties with keys without quotes and values without unnecessary quotes
  const formattedProperties = updatedProperties.map(property => formatProperty(property));
  console.log(formattedProperties);
};

main();