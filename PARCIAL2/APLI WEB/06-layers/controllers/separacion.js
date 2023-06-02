const { response } = require('express');
const { Separacion } = require('../models');


const getSeparaciones = async (req,res = response )=>{
    const { limit = 10 , desde=0 } =  req.query;
    const query = { status:true };

    const [ sum, separaciones ] = await Promise.all([
        Separacion.countDocuments(query),
        Separacion.find(query)
        .populate('idCancha', 'name status')
        .populate('idDeportista', 'name status')
        .populate('deportista', 'descripcion status')
        .skip(Number(since))
        .limit(Number(limit))
    ]);
  
    res.json({
      sum, 
      separaciones
    });
}

const getSeparacion = async (req, res = response)=>{
    const {id} = req.params;
    const Separacion =  await Separacion.findById(id)
       .populate('idCancha', 'name status')
       .populate('idDeportista', 'name status')
       .populate('deportista', 'descripcion status');
    res.json(separacion);
}

const createSeparacion = async(req,res=response)=>{
    const { idCancha, idDeportista, deportista, ...body } =  req.body;

    const partido = new Separacion({
        idCancha,
        idDeportista,
        deportista,
        ...body
      });

      const newSeparacion = await separacion.save();
  res.status(201).json(newSeparacion);
}
     
const updateSeparacion = async(req,res =  response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const separacionUpdated =  await Separacion.findByIdAndUpdate(id,data, {new: true} )
    res.json(separacionUpdated);
}

const deleteSeparacion =  async (req, res= response)=>{
    const {id} = req.params;
    const deletedSeparacion =  await Separacion.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedSeparacion);
}

 module.exports ={
    createSeparacion,
    getSeparacion,
    getSeparaciones,
    updateSeparacion,
    deleteSeparacion
 };