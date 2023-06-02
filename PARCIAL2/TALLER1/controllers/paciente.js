const { response } = require('express')
const { Paciente} = require('../models')

const getPacientes= async (req, res = response )=>{
    const { limit = 10 , since=0 } =  req.query;
    const query = { status:true };

    const [ sum, pacientes ] = await Promise.all([
        Paciente.countDocuments(query),
        Paciente.find(query).skip(Number(since)).limit(Number(limit))
    ]);
  
    res.json({
      sum, 
      pacientes
    });
};

const getPaciente= async (req, res =  response)=>{
    const {id} = req.params
    const paciente=  await Paciente.findById(id).populate('cita');
    res.json(paciente);
};

const createPaciente= async (req, res = response)=>{
    const { status,...body } =  req.body;
    
    const existPaciente =  await Paciente.findOne({Nombre: body.Nombre})

    if (existPaciente)
    {
        return res.status(400).json({
            msg:`El paciente ${ existPaciente.Nombre } ya existe`
        })
    }

    const data = {
        ...body,
        Nombre: body.Nombre
    }

    const paciente= new Paciente(data);

    const newPaciente =  await paciente.save();
    res.status(201).json(newPaciente);
}
const updatePaciente= async (req, res=response)=>{
    const {id} = req.params;
    const { status, ...data } =  req.body;
    // console.log(id,data)
    const updatedPaciente =  await Paciente.findByIdAndUpdate(id,data, {new: true} )
    res.json(updatedPaciente);
}
const deletePaciente= async (req, res = response)=>{
    const {id} = req.params;
    const deletedPaciente =  await Paciente.findByIdAndUpdate(id, {status:false}, {new:true} );
    res.json(deletedPaciente);
}

module.exports = {
    getPaciente,
    getPacientes,
    createPaciente,
    updatePaciente,
    deletePaciente
};