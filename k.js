const fs = require('fs');
const util = require('util');

// Import the properties string from another file
const propertiesString = require('./properties-copy');

// Parse the properties string to convert it into a JavaScript array of objects
const propertiesArray = JSON.parse(propertiesString);

// Convert the JavaScript array of objects to a string representation
const outputString = `const properties = ${util.inspect(propertiesArray, { depth: null, colors: false })};\n\nmodule.exports = properties;`;

// Write the string representation to a .js file
fs.writeFile('output.js', outputString, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File has been written successfully.');
    }
});