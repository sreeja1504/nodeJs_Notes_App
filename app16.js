const chalk = require('chalk');
const yargs = require('yargs');
const notes = require("./notes.js"); 
// console.log(process.argv); 
// this gives path at 0th index and filename at 1st index
yargs.version('1.1.0');
//create add command 
yargs.command({
    command: 'add',
    description :'add a note',
    builder:{
        title :{
            describe :'Note title',
            demandOption :true,
            type :'string'
            

        },
        body:{
            description:'Note body',
            demandOption : true,
            type :'string'


        }

    },
    //ES5
    // handler : function(argv){
        
     handler(argv){    //ES6

    //   console.log('Title :' + argv.title);
    //   console.log('Body :'+ argv.body);
    notes.addNote(argv.title ,argv.body)
    }
})
//create remove command 
yargs.command({
    command: 'remove',
    description: 'remove a note',
    builder:{
        description : 'Note title',
        demandOption : true,
        type : 'string'
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})

//create list command 
yargs.command({
    command :'list',
    description: 'list your notes',
    handler(){
      notes.listNotes();
    }
})

//create read command 
yargs.command({
    command :'read',
    description :'read a note',
    builder:{
        title: {
        description : 'Note title',
        demandOption : true ,
        type : 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
})


// yargs.command({
//     command : 'getNotes',
//     description : 'get notes',
//     handler(){
//         console.log(notes.getNotes())
//     }

// })


// console.log(yargs.argv);
yargs.parse();
