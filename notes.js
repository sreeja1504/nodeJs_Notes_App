const fs = require('fs');
const chalk = require('chalk')

// const getNotes = ()=> {
//     return "Your notes...";
// }

//not working
// const getNotes() {
//     return "Your notes...";
// }


//es6
 const addNote =(title, body) =>{
    const notes = loadNotes();
    // const duplicateNotes = notes.filter((note)=>{
    //     return note.title === title;
    // })

    const duplicateNote = notes.find((note)=>note.title === title) // check whether duplicate is present or not and if presents just return at the first match of duplicate

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        savedNotes(notes);
        console.log('New Note added');
    
    }else{
        console.log('Note title taken');

    }
}

//es5
// const addNote = function (title, body) {
//}
const removeNote = (title) =>{
    const notes = loadNotes();
    const notesToKeep  = notes.filter((note)=> note.title != title )
    if(notesToKeep.length == notes.length){
        console.log(chalk.red.inverse('No note found'))
    }
    else{
        savedNotes(notesToKeep);
        console.log(chalk.green.inverse('Note removed'))
    }
}

const listNotes = () =>{
    const notes = loadNotes();
    console.log(chalk.inverse('Your Notes...'))
    notes.forEach(note => {
        console.log(note.title);
    });
}

const savedNotes = (notes)=> {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON)
}

const readNote = (title)=>{
    const notes = loadNotes();
    const neededNote = notes.find((note)=> note.title === title)
    if(neededNote){
        console.log(chalk.inverse(neededNote.title))
        console.log(neededNote.body)
    }else{
        console.log(chalk.red.inverse('No note found'))
    }

}

const loadNotes = ()=> 
{
    try{
        const dataBuffer = fs.readFileSync('notes.json');//dataBuffer is in binary format 
        const dataJSON = dataBuffer.toString(); //converting to string
        return JSON.parse(dataJSON);
    }catch (e) {
        return []
    }
}
module.exports = {
    // getNotes: getNotes,
    addNote: addNote,
    removeNote : removeNote ,
    listNotes : listNotes,
    readNote : readNote
}
