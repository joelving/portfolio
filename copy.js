const fse = require('fs-extra');

const srcDir = `./src`;
const destDir = `./dist`;
                             
try {
  fse.removeSync(destDir);
  fse.copySync(srcDir, destDir);
  fse.mkdir('./dist/css');
  fse.mkdir('./dist/js');
  fse.copyFileSync('./node_modules/bootstrap.native/dist/polyfill.min.js', './dist/js/polyfill.min.js');
}
catch (err) {
  console.error("Error: " + err)
}