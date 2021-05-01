// const add = require('./util.js');
// // console.log(name);

// const sum = add(4,-2);
// console.log(sum);




//from notes.js
// const chalk = require('chalk');
// const validator = require('validator')
// const getNotes = require('./notes.js')

// const msg=getNotes()
// console.log(msg)
// console.log(validator.isEmail('sreejamadire@incture.com'))
// console.log(validator.isEmail('example.com'))
 
//command line 
const command = process.argv[2];
if(command === 'add'){
    console.log("Adding note!")
}else if(command ==='remove'){
    console.log("removin note")
}
