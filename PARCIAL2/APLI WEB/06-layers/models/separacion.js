const { model, Schema } = require('mongoose');

const SeparacionSchema = Schema(
    {
        id: {
            type: Number,
            required: true
        },
        // relaciones
        idCancha: { 
          type: Schema.Types.ObjectId, 
          ref: 'Cancha',
          required: false
        },

        eqidDeportista: { 
          type: Schema.Types.ObjectId,
          ref: 'Cancha',
          required: false 
        },
        
        deportista: { 
          type:Schema.Types.ObjectId,
          ref: 'Deportista',
          required: false 
        },

              
  });

  SeparacionSchema.methods.toJSON = function(){
    const { __v,  status,  ...data   } =  this.toObject();
    return data;
}


module.exports = model('Separacion', SeparacionSchema );