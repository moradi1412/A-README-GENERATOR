const fs = require('fs');

// writing files
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/readme.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve({
        ok: true,
        message: "Generating Readme ............"
      });
    });
  });
};

module.exports = { writeFile };
