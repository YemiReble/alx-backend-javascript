const fs = require('fs');

// Open the file for reading
const file = fs.readFileSync('database.csv', 'utf8');

// Create a regular expression to match the string you are looking for
const pattern = /SWE/

// Initialize a counter
let count = 0;

// Loop over each line of the file
const lines = file.split('\n');
for (let i = 0; i < lines.length; i++) {
  // Check if the current line contains the string you are looking for
  if (pattern.test(lines[i])) {
    // Increment the counter
    count++;
  }
}

// Print the result
console.log(`The string "${pattern}" occurs ${count} times in the file.`);
