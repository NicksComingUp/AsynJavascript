/*@babel/runtime/regenerator and  webpack-hot-middleware/client are for development  */
require("@babel/runtime/regenerator")
require("webpack-hot-middleware/client?reload=true")
require("../style/main.css")
require('./index.html')
// debugger
// alert("Hello Nicholaus")


const call = (args) => {
  const {a: hell,b: kiss} = args;
  console.log("babel is going to work with .babelrc file", kiss, hell)
  debugger
}

call({a:"help", b:"Make"});
