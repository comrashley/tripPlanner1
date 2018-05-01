const path = require('path');

module.exports = {
  mode: "development", // "production" | "development" | "none"
  // Chosen mode tells webpack to use its built-in optimizations accordingly.

  entry: "./src/index", // string | object | array
  // Here the application starts executing
  // and webpack starts bundling

  output: {
    // options related to how webpack emits results

    path: __dirname + '/public',
       
    filename: "bundle.js", // string
    // the filename template for entry chunks

  }
}