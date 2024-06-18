const fs = require('fs');
const util = require('util');

// Import the properties string from another file
const propertiesString = require('./properties-copy');

// Parse the properties string to convert it into a JavaScript array of objects
const propertiesArray = JSON.parse(propertiesString);

// Set chunk size (adjust according to your data size)
const chunkSize = 100; // You can adjust this value

// Convert the JavaScript array of objects to a string representation in chunks
let outputString = 'const properties = [\n';
for (let i = 0; i < propertiesArray.length; i += chunkSize) {
    const chunk = propertiesArray.slice(i, i + chunkSize);
    outputString += util.inspect(chunk, { depth: null, colors: false });
    if (i + chunkSize < propertiesArray.length) {
        outputString += ',\n';
    }
}
outputString += '];\n\nmodule.exports = properties;';

// Write the string representation to a .js file
fs.writeFile('output.js', outputString, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File has been written successfully.');
    }
});