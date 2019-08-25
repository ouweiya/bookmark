const readline = require('readline');
const fs = require('fs');

const readInterface = readline.createInterface({
  input: fs.createReadStream('./data.js')
});

let obj = [];

readInterface.on('line', line => {
  line = line.split('|');
  const url = line.shift().trim();
  const title = line.join('').trim();
  obj.push({ url, title });
});

setTimeout(_ => {
  fs.writeFile('./last.js', JSON.stringify(obj), err => console.log);
}, 3000);
