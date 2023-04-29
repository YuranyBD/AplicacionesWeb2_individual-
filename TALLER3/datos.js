const mongoose = require('mongoose')
///Conexión a la base de datos Cita Medica
const connectionURL = "mongodb+srv://Greilybravo:Bravo2002@cluster0.ouowpa3.mongodb.net/citamedica";

(async ()=>{
    try {
        ///Conexion a la base de datos 
        const EstadoDeLaConexion = await mongoose.connect(connectionURL)
    } catch (error) {
        console.log(error);
    }
})()

///Entidades a utilizar 

///entidad 1

const Paciente = moongose.model("Paciente",

{
    Nombre: String,
    Identificación:String,
});

///entidad 2

const Doctor = moongose.model("Doctor",

{
    Nombre: String,
    Identificacion: String,
});



///entidad 3

const Cita = moongose.model("Cita",

{
    IdPaciente: {type:mongoose.Types.ObjectId, ref:"Paciente"},
    IdDoctor: {type:mongoose.Types.ObjectId, ref:"Doctor"},
    Fecha:String,
    Hora: String,
    SintomasPresentados 
});

///usamos module.exports para poder hacer uso de las entidades en nuestro otro archivo
 module.exports = { Paciente, Doctor, Cita, };
