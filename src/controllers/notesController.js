//REQUERIR EL MODELO DE LA BASE DE DATOS
const NoteModel = require('../models/NoteModel')
//USARLO 
//ALMACENAR EN UN OIBJETO OTDAS LAS FUNCIONES RELACIONADAS CON LAS RUTAS
const notesController = {}


//PETICION GET notas*******************************************************************************
notesController.getNotes = async (req,res) => {
    const notes= await NoteModel.find(); // DEVUELVE UN ARREGO CON LAS NOTAS EN LA BASE DE DATOS
    res.json(notes)
}

//PETICION POST************************************************************************************
notesController.createNote =  async (req,res) => {
    //    console.log(req.body)
    const {title, content, date, author} = req.body;
    const newNote = new NoteModel({
        title:title, 
        content:content, 
        date:date, 
        author:author
     });
     console.log(newNote)
     await newNote.save();
     res.json({ msg : 'Note saved'})
     
};

//PETICION GET nota*******************************************************************************
notesController.getNote =async (req,res) => {
    const note = await NoteModel.findById(req.params.id)
    //console.log(note)
    res.json(note)
};

//PETICION PUT**************************************************************************************
notesController.updateNote = async (req,res) => {
    const {title,content,author} = req.body;
    await  NoteModel.findOneAndUpdate({_id:req.params.id},{title,author,content})

    res.json( { msg: 'Note updated' } )

};
//PETICION DELETE**********************************************************************************
notesController.deleteNote = async (req,res) => {
    await  NoteModel.findByIdAndDelete(req.params.id)
    res.json( { msg: 'Note deleted' } )
};

module.exports = notesController;