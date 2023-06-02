const { model, Schema } = require('mongoose');

const DeportistaSchema = Schema(
    {
        id: {
            type: Number,
            required: true
        },
        
        descripcion: {
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

DeportistaSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('Deportista', DeportistaSchema );