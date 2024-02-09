const fs = require('node:fs');
const { argv } = require('node:process');

const fileToRead = argv[2];
const searchedHash = argv[3];

if (!fileToRead) return console.error('No file specified.');
if (!searchedHash) return console.error('No hash specified.');

fs.readFile(fileToRead, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const lines = data.split('\n');

  const [word, hash] = lines.find((line) => line.includes(searchedHash)).split(';');

  if (!word) return console.log('No word with provided hash found.');

  console.log(`Found a match!\nHash ${hash} is: ${word}`);
});
