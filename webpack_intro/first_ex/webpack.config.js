
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports={
 entry:'./src/message.js',
 output:{
   path:path.resolve(__dirname,"./dist"),
   filename: "webpack_made.js"
 },
 plugins:[new HtmlWebpackPlugin()]
};

