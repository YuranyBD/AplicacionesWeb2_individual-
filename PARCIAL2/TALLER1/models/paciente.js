const { model, Schema } = require('mongoose');

const PacienteSchema = Schema(
    {
        idPaciente: {
            type: Number,
            required: true
          },
        Nombre: {
            type: String,
            required: true
          },
          
          Identificacion: {
            type: Number,
            required: true
          },
          
          status:{
            type: Boolean,
            default: true,
            required:true
        }
    }
);

PacienteSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('Paciente', PacienteSchema );