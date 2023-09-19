// Get User name and display a message
console.log('Welcome to Holberton School, what is your name?')
const readline = require('readline')

const ask = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

ask.question('', function(username) {
    console.log(`Your name is: ${username}`);
    console.log('This important software is now closing');
    ask.close();
});
