const mongoose = require("mongoose");

//Esquema o modelo de datos del usuario
const postSchema = mongoose.Schema({
    titulo : {
        type: String,required:true
    },
    contenido : {
        type: String,required:true
    },
   
});


module.exports = mongoose.model('post',postSchema);