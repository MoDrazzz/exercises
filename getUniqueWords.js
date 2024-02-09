const fs = require('node:fs');

fs.readFile('./Pan_Tadeusz.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const lines = data.split('\n');
  const words = lines.map((line) => line.split(' ')).flat();
  const uniqueWords = [...new Set(words)];

  fs.writeFile('./Unique_Words.txt', uniqueWords.join('\n'), (err) => {
    if (err) {
      console.error(err);
    }
  });
});
