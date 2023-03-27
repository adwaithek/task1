const fs = require('fs');

fs.readdir('.', (err, files) => {
  if (err) throw err;
  files.forEach(file => {
    console.log(file);
  });
});