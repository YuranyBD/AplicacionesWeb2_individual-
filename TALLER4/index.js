const express = require("express");
const cors = require("cors");
const { Doctor } = require("../TALLER1/CITA"); //se importó los datos del taller 1 para su utilización en este nuevo taller

const app = express();
app.use(cors()).use(express.json());
const puerto = 8080;
//En este caso hice uso del puerto 8080

app.listen(puerto, () => {
  console.log(`Server running https://localhost:${puerto}`);
});

//Método Get utilizando CRUD
app.get("/", (req, res) => {
  res.status(202).send(Doctor);
});
// res.status(202)

//Método Get (individual) utilizando CRUD
app.get("/:id", (req, res) => {
  const { id } = req.params;
  const idNum = parseInt(id);
  const DoctorFiltro = Doctor.filter((doct) => doct.idDoctor === idNum);
  if (DoctorFiltro.length > 0) {
    res.status(200).send(DoctorFiltro);
  }
  res.status(405).send({
    message: `No se encontró Doctor con el id ${idNum}`,
  });
});

//Método Post utilizando CRUD
app.post("/", (req, res) => {
  const { body } = req;
  Doctor.push(body);
  res.status(202).send({
    message: "Datos guardados exitosamente",
    response: body,
  });
});

//Método PUT utilizando CRUD
app.put("/", (req, res) => {
  const { idDoctor, NombreDo, Identificacion } = req.body;
  const idNum = parseInt(idDoctor);
  const index = Doctor.findIndex((doct) => doct.idDoctor === idNum);

  if (index >= 0) {
    Doctor[index].NombreDo = NombreDo;
    Doctor[index].Identificacion = Identificacion;

    res.status(202).send({
      message: "El dato a sido modificado",
      response: Doctor[index],
    });
  } else {
    res.status(404).send({
      message: "Doctor no encontrado",
    });
  }
});

//Método Delete utilizando CRUD
app.delete("/:idDoctor", (req, res) => {
    const { idDoctor } = req.params;
    const idNum = parseInt(idDoctor);
    const FiltroDoctor = Doctor.filter((doct) => doct.idDoctor !== idNum);
    res.status(202).json(FiltroDoctor);
});

//Para la comprobación de los métodos utilice la herramienta de Insomnia