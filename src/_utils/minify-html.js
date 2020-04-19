const htmlmin = require("html-minifier");

module.exports = function(content, outputPath) {
  if (outputPath && outputPath.endsWith(".html")) {
    let minified = htmlmin.minify(content, {
      useShortDoctype: true,
      removeComments: true,
      collapseWhitespace: true,
      minifyCSS: true,
      minifyJS: true
    });
    return minified;
  }
  return content;
};
// check if outputPath exists to prevent build error
