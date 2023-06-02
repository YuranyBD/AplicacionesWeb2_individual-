const { response } = require('express')
const { Cancha } = require('../models')

const getCanchas= async (req, res = response )=>{
    const { limit = 10 , since=0 } =  req.query;
    const query = { status:true };

    const [ sum, canchas ] = await Promise.all([
        Cancha.countDocuments(query),
        Cancha.find(query).skip(Number(since)).limit(Number(limit))
    ]);
  
    res.json({
      sum, 
      canchas
    });
};

const getCancha= async (req, res =  response)=>{
    const {id} = req.params
    const cancha=  await Cancha.findById(id).populate('separacion');
    res.json(cancha);
};

const createCancha= async (req, res = response)=>{
    const { status, ...body } =  req.body;
    
    const existCancha =  await Cancha.findOne({name: body.name})

    if (existCancha) {
        return res.status(400).json({
            msg:`La cancha ${ existCancha.name } ya existe`
        })
    }

    const data = {
        ...body,
        name: body.name
    };

    const cancha = new Cancha(data);
    const newCancha =  await cancha.save();
    res.status(201).json(newCancha);
};

const updateCancha= async (req, res=response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;

    const updatedCancha =  await Cancha.findByIdAndUpdate(id,data, {new: true} )
    res.json(updatedCancha);
};

const deleteCancha= async (req, res = response)=>{
    const {id} = req.params;
    const deletedCancha =  await Cancha.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedCancha);
};

module.exports = {
    getCancha,
    getCanchas,
    createCancha,
    updateCancha,
    deleteCancha
};