const { response } = require('express')
const { Deportista } = require('../models')


const getDeportistas= async (req, res = response )=>{
    const { limit = 10 , since=0 } =  req.query;
    const query = { status:true };

    const [ sum, deportistas ] = await Promise.all([
        Deportista.countDocuments(query),
        Deportista.find(query)
        .skip(Number(since))
        .limit(Number(limit))
    ]);
  
    res.json({
      sum, 
      deportistas
    })
}

const getDeportista= async (req, res =  response)=>{
    const {id} = req.params
    const deportista=  await Deportista.findById(id);
    res.json(deportista);
}
const createDeportista= async (req, res = response)=>{
    const { status, ...body } =  req.body;
    
    const existDeportista =  await Deportista.findOne({descripcion: body.descripcion})

    if (existDeportista)
    {
        return res.status(400).json({
            msg:`El deportista ${ existDeportista.name } ya existe`
        })
    }

    const data = {
        ...body,
        descripcion: body.descripcion
    }

    const deportista = new Deportista(data);

    const newDeportista =  await deportista.save();
    res.status(201).json(newDeportista);
}
const updateDeportista= async (req, res=response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const updatedDeportista =  await Deportista.findByIdAndUpdate(id,data, {new: true} )
    res.json(updatedDeportista);
}
const deleteDeportista= async (req, res = response)=>{
    const {id} = req.params;
    const deletedDeportista =  await Deportista.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedDeportista);
}

module.exports = {
    getDeportista,
    getDeportistas,
    createDeportista,
    updateDeportista,
    deleteDeportista
};