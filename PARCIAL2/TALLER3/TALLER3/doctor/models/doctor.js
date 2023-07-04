const { model, Schema } = require('mongoose');


const doctorSchema = Schema(
    {
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


module.exports = model('Doctor', doctorSchema );