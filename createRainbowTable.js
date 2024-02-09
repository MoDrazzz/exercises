const fs = require('node:fs');
const md5 = require('js-md5');
const { argv } = require('node:process');

const fileToRead = argv[2];

if (!fileToRead) return console.error('No file specified.');

fs.readFile(fileToRead, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const words = data.split('\n');
  const rainbowTable = words.map((word) => `${word};${md5(word)}`);

  fs.writeFile('./rainbow_word_list.txt', rainbowTable.join('\n'), (err) => {
    if (err) {
      console.error(err);
    }
  });
});
