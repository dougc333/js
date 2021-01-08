first example with webpack.config.js
HtmlWebpackPlugin will create index.html w/HTML 5 template! No need to type an HTML file to match index.js. 

this should be first. the docs using lodash are awful 

1) mkdir dist/ mkdir src
2) npm init -y
3) npm install webpack webopack-cli --save-dev
4) npx webpack

Options: inject. Inject means adding JS code to HTML file by adding a script tag and the file
name of the JS output file specified in webpack.config.js.
JS is injected because inject:true by default. The docs say JS is injected to end of the body element. 


https://github.com/jaketrent/html-webpack-template

