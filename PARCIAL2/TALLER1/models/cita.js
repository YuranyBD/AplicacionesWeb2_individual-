const { model, Schema } = require('mongoose');

const CitaSchema = Schema(
    {
        Nombre: {
            type: String,
            ref:"Paciente",
            required: true
        },
        id: {
            type: Number,
            required: true
        },

        IdPaciente: {
            type:Schema.Types.ObjectId, 
            ref:"Paciente",
            required: true
        },
        IdDoctor: {
            type:Schema.Types.ObjectId,
            ref:"Doctor",
            required: true
        },
        Fecha:{
            type: String,
            default: true,
            required:true
        },
        Hora:{
            type: String,
            default: true,
            required:true
        },
        SintomasPresentados: {
            type: String,
            required: true
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        }
    }
);

module.exports = model('Cita', CitaSchema );
