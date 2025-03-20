

const fs = require('node:fs');

fs.readFile('test.txt', 'utf8', (err, data) => {
  console.log(data);
  fs.readFile('test2.txt', 'utf8', (err2, data2) => {
    console.log(data2);
    fs.readFile('test3.txt', 'utf8', (err3, data3) => {
      console.log(data3);
    });
  });
});



console.log('Run this as soon as possible.');
