sub = require('./sub.js');
console.log(sub);

var fs=require('fs');
fs.readFile('./text.txt',{encoding:'utf-8'}, function(err,data){
    console.log(data);
})

const chalk = require('chalk');
 
console.log(chalk.blue('Hello world!'));