const yargs = require('yargs');
yargs.version('1.1.0')
yargs.command({
 command: 'add',
 describe: 'Add a new note',
 handler: function () {
 console.log('Adding a new note!')
 } 
})
console.log(yargs.argv)
// console.log(process.argv)
// command is node trial.js add 
//No function parameter 
//node trial.js add --title="first".
//function parameter is argv .
//summary : while running ,in command if we pass arguments then in handler function add argv as parameter .