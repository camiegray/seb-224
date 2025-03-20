const fs = require('node:fs/promises');

const readDataFiles = async () => {
  const data = await fs.readFile('test.txt', 'utf8');
  console.log(data);
  const data2 = await fs.readFile('test2.txt', 'utf8');
  console.log(data2);
  const data3 = await fs.readFile('test3.txt', 'utf8');
  console.log(data3);
}


readDataFiles();

const readAnotherFile = async () => {
  try {
    // asynchronous operation reading a file that doesn't exist
    const data = await fs.readFile('test4.txt', 'utf8');
    console.log(data);
  } catch (error) {
    // console logging the error lets us see what went wrong
    console.log(error);
  }
}

readAnotherFile();

console.log('run this as soon as possible');
