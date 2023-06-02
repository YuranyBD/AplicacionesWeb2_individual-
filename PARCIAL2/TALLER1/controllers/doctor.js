const { response } = require('express');
const { Doctor } = require('../models');

const getDoctores = async (req, res = response) => {
  //GET http://localhost:3000/doctores?limit=100&since=1
  const { limit = 10, since = 0 } = req.query;
  const query = { status: true };

  const [sum, doctores] = await Promise.all([
    Doctor.countDocuments(query),
    Doctor.find(query)
      .populate('cita', 'nombre status')
      .skip(Number(since))
      .limit(Number(limit)),
  ]);

  res.json({
    sum,
    doctores,
  });
};

const getDoctor = async (req, res = response) => {
  const { id } = req.params;
  const doctor = await Doctor.findById(id).populate('cita');
  res.json(doctor);
};

const createDoctor = async (req, res = response) => {
  const { status, user, ...body } = req.body;

  const existDoctor = await Doctor.findOne({ nombre: body.nombre });

  if (existDoctor) {
    return res.status(400).json({
      msg: `El doctor ${existDoctor.nombre} ya existe`,
    });
  }

  const { Nombre, Identificacion } = body;

  if (!Nombre || !Identificacion) {
    return res.status(400).json({
      msg: 'El nombre y la identificación son campos requeridos',
    });
  }

  const data = {
    ...body,
    nombre,
    identificacion,
  };

  const doctor = new Doctor(data);

  const newDoctor = await doctor.save();
  res.status(201).json(newDoctor);
};

const updateDoctor = async (req, res = response) => {
  const { id } = req.params;
  const { status, ...data } = req.body;
  // console.log(id,data)
  const updatedDoctor = await Doctor.findByIdAndUpdate(id, data, { new: true });
  res.json(updatedDoctor);
};

const deleteDoctor = async (req, res = response) => {
  const { id } = req.params;
  const deletedDoctor = await Doctor.findByIdAndUpdate(id, { status: false }, { new: true });
  res.json(deletedDoctor);
};

module.exports = {
  getDoctor,
  getDoctores,
  createDoctor,
  updateDoctor,
  deleteDoctor,
};
