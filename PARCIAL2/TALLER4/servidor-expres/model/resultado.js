const { Schema, model } = require("mongoose");


const ResultadoSchema = Schema({
    
    ID: {
        type: String,
    },
    Id_Paciente: {
        type: String,
        required:[true, 'El campo Id_Paciente es obligatorio']
    },
    Id_Doctor: {
        type: String,
        required:[true, 'El campo Id_Doctor es obligatorio']
    },
    Fecha: {
        type: String,
        required:[true, 'El campo Fecha es obligatorio']
    },
    Hora: {
        type: String,
        required:[true, 'El campo Hora es obligatorio']
    },
    Sintomas: {
        type: String,
        required:[true, 'El campo Sintomas es obligatorio']
    }
})

module.exports= model('Resultado', ResultadoSchema)