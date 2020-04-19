const Terser = require("terser");
module.exports = function(code) {
  let minified = Terser.minify(code);
  if (minified.error) {
    console.log("Terser error: ", minified.error);
    return code;
  }

  return minified.code;
};
