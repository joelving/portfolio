const purify = require("purify-css");

var content = ['**/src/js/*.js', '**/src/*.html'];
var css = ['./node_modules/bootstrap/dist/css/bootstrap.css'];

var options = {
  output: './dist/css/bootstrap-custom.css',
  minify: true,
  info: true,
  whitelist: ['modal-scrollbar-measure', 'modal-backdrop', 'modal-open', 'fade', 'show']
};

purify(content, css, options);