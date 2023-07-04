const { response } = require('express');
const { Doctor } = require('../models');


const getDoctores = async (req,res = response )=>{
    const { limite = 10 , desde=0 } =  req.query;
    const query = { status:true };

    const [ sum, doctores ] = await Promise.all([
        Doctor.countDocuments(query),
        Doctor.find(query)
        .skip(Number(desde))
        .limit(Number(limite))
    ]);
  
    res.json({
      sum, 
      doctores
    })
}

const getDoctor = async (req, res= response)=>{
    const {id} = req.params
    const doctor=  await Doctor.findById(id);
    res.json(doctor);
}
const createDoctor = async(req,res=response)=>{
    const { status, ...body } =  req.body;
    
    const existDoctor =  await Doctor.findOne({name: body.name})

    if (existDoctor)
    {
        return res.status(400).json({
            msg:`Los Doctores ${ existDoctor.name } ya existe`
        })
    }

    const data = {
        ...body,
        name: body.name
    }

    const doctor= new Doctor(data);

    const newDoctor =  await doctor.save();
    res.status(201).json(newDoctor);
}
const updateDoctor = async(req,res =  response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    const doctorUpdated =  await Doctor.findByIdAndUpdate(id,data, {new: true} )
    res.json(doctorUpdated);
}
const deleteDoctor =  async (req, res= response)=>{
    const {id} = req.params;
    const deletedDoctor =  await Doctor.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedDoctor);
}

 module.exports ={
    createDoctor,
    getDoctores,
    getDoctor,
    updateDoctor,
    deleteDoctor
 }