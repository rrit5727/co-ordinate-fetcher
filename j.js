const fs = require('fs');
const fetch = require('node-fetch');
const propertiesString = require('./properties'); // Importing properties 

// Convert the properties string to a JSON object
const properties = JSON.parse(propertiesString);

// Function to fetch coordinates for an address
const fetchCoordinates = async (address, propertyIndex, chunkCounter) => {
    // Replace double spaces with single space
    const formattedAddress = address.replace(/\s{2,}/g, ' ');

    const apiUrl = `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(formattedAddress)}&format=json`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data && data.length > 0) {
            const coordinates = {
                lat: parseFloat(data[0].lat),
                lon: parseFloat(data[0].lon),
            };
            console.log(`Processed ${propertyIndex} properties in chunk ${chunkCounter}`);
            return coordinates;
        } else {
            console.log(`Failed to fetch coordinates for address: ${formattedAddress}`);
            return null; // Return null if coordinates are not found
        }
    } catch (error) {
        console.error('Error fetching coordinates:', error);
        throw error;
    }
};

// Function to chunk array into smaller arrays
const chunkArray = (arr, chunkSize) => {
    const chunks = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
        chunks.push(arr.slice(i, i + chunkSize));
    }
    return chunks;
};

// Function to write properties chunk to file
const writePropertiesChunkToFile = async (propertiesChunk, counter) => {
    return new Promise((resolve, reject) => {
        const outputFile = `updatedProperties_${counter}.js`; // Updated output file path
        const stream = fs.createWriteStream(outputFile, { flags: 'w' }); // Overwrite mode
        stream.write('const propertiesString = `[\n'); // Start with the new content

        propertiesChunk.forEach((property, index) => {
            // Replace double spaces with single space in address and street_address
            property.address = property.address.replace(/\s{2,}/g, ' ');
            property.street_address = property.street_address.replace(/\s{2,}/g, ' ');

            const objectString = JSON.stringify(property);
            stream.write(objectString);
            if (index < propertiesChunk.length - 1) {
                stream.write(',\n');
            } else {
                stream.write('\n');
            }
        });

        stream.write(']`;\nmodule.exports = propertiesString;\n'); // End with the new content
        stream.end(() => {
            console.log(`Updated properties saved to ${outputFile}`);
            resolve();
        });
        stream.on('error', err => {
            reject(err);
        });
    });
};

// Main function
const main = async () => {
    const chunkSize = 99; // Adjust chunk size as needed
    let counter = 0;
    let failedCoordinates = [];

    // Split properties array into chunks
    const chunks = chunkArray(properties, chunkSize);

    for (const chunk of chunks) {
        counter++; // Increment counter for each chunk
        let propertyIndex = 0; // Initialize property index for each chunk
        const updatedProperties = [];

        for (const property of chunk) {
            const address = property['street_address']; // Corrected key name
            const coords = await fetchCoordinates(address, ++propertyIndex, counter);
            
            // Check if coordinates are fetched successfully
            if (coords !== null) {
                const updatedProperty = {
                    ...property,
                    coordinates: coords,
                };
                updatedProperties.push(updatedProperty);
            } else {
                // Log failed coordinates
                failedCoordinates.push(property);
            }
        }

        // Write properties chunk to file
        await writePropertiesChunkToFile(updatedProperties, counter);
    }

    console.log('All properties files have been saved.');
    
    // Print summary of properties with failed coordinates
    if (failedCoordinates.length > 0) {
        console.log('\nProperties with failed coordinates:');
        failedCoordinates.forEach(property => {
            console.log(`Address: ${property.address}`);
        });
    } else {
        console.log('\nAll coordinates fetched successfully.');
    }
};

// Run the main function
main();