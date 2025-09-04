const fs = require('fs');
const path = require('path');

const modelsDir = path.join(__dirname, 'models');
const jsDirs = ['routes', 'models']; // folders to scan for require() statements

// Step 1: Rename model files to lowercase
fs.readdirSync(modelsDir).forEach(file => {
  const oldPath = path.join(modelsDir, file);
  const lowerFile = file.toLowerCase();
  const newPath = path.join(modelsDir, lowerFile);
  if (file !== lowerFile) {
    if (fs.existsSync(newPath)) {
      console.warn(`Skipping ${file}, target ${lowerFile} already exists`);
    } else {
      fs.renameSync(oldPath, newPath);
      console.log(`Renamed ${file} -> ${lowerFile}`);
    }
  }
});

// Step 2: Update require() statements in JS files
function updateRequires(dir) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      updateRequires(filePath); // recursive
    } else if (file.endsWith('.js')) {
      let content = fs.readFileSync(filePath, 'utf8');

      // Replace require('../models/Capitalized') with lowercase
      content = content.replace(
        /require\(['"]\.\.\/models\/([A-Za-z]+)['"]\)/g,
        (match, p1) => {
          return `require('../models/${p1.toLowerCase()}')`;
        }
      );

      fs.writeFileSync(filePath, content, 'utf8');
    }
  });
}

// Scan all JS directories
jsDirs.forEach(dir => {
  const fullDir = path.join(__dirname, dir);
  if (fs.existsSync(fullDir)) updateRequires(fullDir);
});

console.log('Done! All model files renamed and require statements updated.');