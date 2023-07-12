const mongoose = require('mongoose');
mongoose.set('strictQuery', false);

const database_mongodb = async () =>{
    try {
        await mongoose.connect( 'mongodb+srv://Greilybravo:Bravo2002@cluster0.ouowpa3.mongodb.net/?retryWrites=true&w=majority',  {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('Base de Datos online');
    } catch (error) {
        console.log(error);
        throw new Error('Error en la base de datos')
    }
}


module.exports={
    database_mongodb
}