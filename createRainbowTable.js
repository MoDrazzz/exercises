const fs = require('node:fs');

const md5 = require('js-md5');

fs.readFile('word_list.txt', 'utf8', (err, data) => {
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
