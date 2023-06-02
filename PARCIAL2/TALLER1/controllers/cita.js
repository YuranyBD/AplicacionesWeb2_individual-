const { response } = require('express');
const { Cita } = require('../models');


const getCitas = async (req, res = response) => {
  const { limite = 10, desde = 0 } = req.query;
  const query = { status: true };

  const [sum, citas] = await Promise.all([
    Citas.countDocuments(query),
    Citas.find(query)
      .skip(Number(desde))
      .limit(Number(limite))
  ]);

  res.json({
    sum,
    citas
  });
};

const getCita = async (req, res = response) => {
  const { id } = req.params;
  const cita = await Cita.findById(id);
  res.json(cita);
};

const createCita = async (req, res = response) => {
    const { Nombre, idCita, idPaciente, idDoctor, Fecha, Hora, Sintomas } = req.body;
  
    const existCita = await Cita.findOne({ idCita });
  
    if (existCita) {
      return res.status(400).json({
        msg: `La cita con ID ${idCita} ya existe`
      });
    }
  
    const newCita = new Cita({
      Nombre,
      idCita,
      idPaciente,
      idDoctor,
      Fecha,
      Hora,
      Sintomas
    });
  
    await newCita.save();
    res.status(201).json(newCita);
  };

const updateCita = async (req, res = response) => {
  const { id } = req.params;
  const { Nombre, idPaciente, idDoctor, Fecha, Hora, Sintomas, ...data } = req.body;

  const citaUpdated = await Citas.findByIdAndUpdate(id, data, { new: true });
  res.json(citaUpdated);
};

const deleteCita = async (req, res = response) => {
  const { id } = req.params;
  const deletedCita = await Citas.findByIdAndUpdate(id, { status: false }, { new: true });
  res.json(deletedCita);
};

module.exports = {
  createCita,
  getCita,
  getCitas,
  updateCita,
  deleteCita
};
