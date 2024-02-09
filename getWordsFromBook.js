const fs = require('node:fs');

const punctationMarksRegex = /[!\"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~«»—…]/g;

fs.readFile('./Pan_Tadeusz.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const lines = data.split('\n');
  const words = lines.map((line) => line.replaceAll(punctationMarksRegex, '').split(' ')).flat();

  const uniqueWords = [...new Set(words)];

  fs.writeFile('./word_list.txt', uniqueWords.join('\n'), (err) => {
    if (err) {
      console.error(err);
    }
  });
});
