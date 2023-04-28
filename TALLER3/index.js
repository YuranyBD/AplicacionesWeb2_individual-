const mongoose = require('mongoose')

const connectionURL = "mongodb+srv://Greilybravo:Bravo2002@cluster0.ouowpa3.mongodb.net/citamedica";

(async ()=>{
    try {
        ///Conexion a la base de datos 
        const EstadoDeLaConexion = await mongoose.connect(connectionURL)
        ///Definir un objeto
        const Paciente = mongoose.model("Paciente",{Nombre:String, Identificacion:Number})
        ///Crear un objeto en base al modelo
        const Paciente1 = new Paciente ({Nombre:"Carol Pamela Vera Castro", Identificacion: "1351023989"})
        ///Enviar o almacenar el objeto a la base de datos
        const almacenoPaciente = await Paciente1.save()

    } catch (error) {
        console.log(error);
    }
})()
