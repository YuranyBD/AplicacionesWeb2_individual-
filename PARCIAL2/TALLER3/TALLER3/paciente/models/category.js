const { model, Schema } = require('mongoose');

const CategorySchema = Schema(
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
        Name: {
            type: String,
            unique: true
        },
        Identificacion: {
            type: Number,
            required: true
    }
}

);


module.exports = model('Category', CategorySchema );