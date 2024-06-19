const fs = require('fs');
const util = require('util');

// Set chunk size (adjust according to your data size)
const chunkSize = 100; // You can adjust this value

let combinedProperties = [];

// Loop through files and combine properties
for (let i = 1; ; i++) {
    const filename = `updatedProperties_${i}.js`;
    try {
        const propertiesString = require(`./${filename}`);
        combinedProperties = combinedProperties.concat(JSON.parse(propertiesString));
        console.log(`Processed ${i} files: ${filename}`);
    } catch (err) {
        // No more files found
        console.log('All files have been processed.');
        break;
    }
}

// Convert the JavaScript array of objects to a string representation in chunks
let outputString = 'const properties = [\n';
for (let i = 0; i < combinedProperties.length; i += chunkSize) {
    const chunk = combinedProperties.slice(i, i + chunkSize);
    outputString += util.inspect(chunk, { depth: null, colors: false }).slice(1, -1); // Remove square brackets added by util.inspect
    if (i + chunkSize < combinedProperties.length) {
        outputString += ',\n';
    }
}
outputString += '\n];\n\nmodule.exports = properties;';

// Write the string representation to a .js file
fs.writeFile('updatedPropertiesObject.js', outputString, (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File has been written successfully.');
    }
});