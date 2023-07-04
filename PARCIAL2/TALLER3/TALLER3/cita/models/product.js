const { model, Schema } = require('mongoose');

const ProductSchema = Schema(
    {
        name:{
            type: String,
            required: [ true, 'El nombre del producto es necesario'],
            unique:true
        },
        status:{
            type: Boolean,
            default: true,
            required:true
        },
        id: {
            type: Number,
            unique: true
        },
        Fecha: {
            type: String,
            default: true,
            required: true
        },
        Hora: {
            type: String,
            default: true
        },
        sintomas: {
            type: String,
            default: true
        },
        Paciente: {
            type: Schema.Types.ObjectId,
            ref: 'Paciente',
            required: false
        },

        Descripcion: {
            type: String,
            default: true,
            required: true
        },

        category: {
            type: Schema.Types.ObjectId,
            ref:'Category',
            required:false
        },
        signo: {
            type: Schema.Types.ObjectId,
            ref: 'Signo',
            required: false
        }
    }
);

ProductSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('Product', ProductSchema );