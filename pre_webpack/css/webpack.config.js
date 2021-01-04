import css from './src/index.css';
const path = require('path');


module.exports={
    module:{
        rules:[
        {
          test: /\.css$/i,
          use:['style-loader',"css-loader"],
        },
    ],
  },
};