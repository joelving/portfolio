const fse = require('fs-extra');
const resolve = require('path').resolve;

const srcDir = resolve(`./src`);
const destDir = resolve(`./dist`);
                             
try {
  fse.removeSync(destDir);
  fse.copySync(srcDir, destDir, { overwrite: true });
  fse.mkdirSync(destDir + '/css');
  fse.mkdirSync(destDir + '/js');
  fse.copyFileSync('./node_modules/bootstrap.native/dist/polyfill.min.js', destDir + '/js/polyfill.min.js');
}
catch (err) {
  console.error("Error: " + err)
}