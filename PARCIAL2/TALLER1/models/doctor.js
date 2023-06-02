const { model, Schema } = require('mongoose');

const DoctorSchema = Schema(
    {
      idDoctor: {
        type: Number,
        required: true
      },
      Nombre: {
        type: String,
        required: true
      },
          identificacion: {
            type: String,
            required: true
          }
    }
);

DoctorSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}

module.exports = model('Doctor', DoctorSchema );