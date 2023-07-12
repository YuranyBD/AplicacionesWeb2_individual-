const cors = require("cors");
const express  = require("express");
const  { database_mongodb } = require('./model/database')
const Resultado = require('./model/resultado')

const app =  express();
const PUERTO =  1000;

const dbmongo = async ()=>{
    await database_mongodb();

}
dbmongo();

app.use(cors()).use(express.json())
app.use('/public', express.static(__dirname+'/public') )


app.get('/Resultado', async (req,res)=>{

    const resultado = await Resultado.find()
    
    res.status(200).send(
        resultado
    )
})
app.get('/resultado/:id', async (req,res)=>{
    const {id} = req.params
    const resultado = await Resultado.findById()
    
    res.status(200).send(
        resultado
    )
})

app.post ('/resultado', async (req,res)=>{
    const { ID, Id_Paciente, Id_Doctor, Fecha, Hora,Sintomas } = req.body;
    const resultado = new Resultado({ ID, Id_Paciente, Id_Doctor, Fecha, Hora,Sintomas})
    await resultado.save();
    res.status(200).send({
        message:"Dato insertado ",
        resultado
    })
})

app.put('/resultado/:id', async (req,res)=>{
    const {id} = req.params;
    const {...data} = req.body;

    const resultado = await Resultado.findByIdAndUpdate(id,data)
    
    res.status(200).send(
        {
            message:"dato modificado ",
            resultado
        }
    )

})
app.delete('/resultado/:id', async (req,res)=>{
    const {id} =  req.params;
    const resultado = await Resultado.deleteOne()
    res.status(200).send({
        response:"Se eliminó"
    })
})



app.listen(PUERTO, ()=>{
    console.log(`Servidor corriendo, http://localhost:${PUERTO}`)
})