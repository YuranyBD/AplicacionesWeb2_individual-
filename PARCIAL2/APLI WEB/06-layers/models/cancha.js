const { model, Schema } = require('mongoose');

const CanchaSchema = Schema(
    {
        name: {
            type: String,
            required: true
        },
        id: {
            type: String,
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

CanchaSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('Cancha', CanchaSchema );