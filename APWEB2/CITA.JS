//Entidades coon sus respectivos atributos
const Paciente = [
  {
    idPaciente: 1,
    Nombre: "Carol Pamela Vera Castro",
    Identificacion: "1351023989",
  },
  {
    idPaciente: 2,
    Nombre: "Omar Adrian Ponce Quiroz",
    Identificacion: "1309848859",
  },
  {
    idPaciente: 3,
    Nombre: "Marcos Enrique Barcia Falconis",
    Identificacion: "14567892309",
  },
  {
    idPaciente: 4,
    Nombre: "Greily Yurany Bravo Delgado",
    Identificacion: "13156778948",
  },
];

const Doctor = [
  {
    idDoctor: 1,
    NombreDo: "Jorge Luis Vera Castro",
    Identificacion: "13457234568",
  },

  {
    idDoctor: 2,
    NombreDo: "Angelo Zair Mero Castillo",
    Identificacion: "130754365091",
  },
  {
    idDoctor: 3,
    NombreDo: "Yandry Javier Briones Cedeño",
    Identificacion: "1312098765",
  },
  {
    idDoctor: 4,
    NombreDo: "Jamileth Estela Anchundia Anchundia",
    Identificacion: "13678934678",
  },
];

const Cita = [
  {
    id: 1,
    idPaciente: 1,
    idDoctor: 1,
    Fecha: "12/09/23",
    Hora: "3:00",
    Sintomas: "Gastritis",
  },
  {
    id: 2,
    idPaciente: 2,
    idDoctor: 2,
    Fecha: "19/05/23",
    Hora: "2:00",
    Sintomas: "Alergias",
  },
  {
    id: 3,
    idPaciente: 3,
    idDoctor: 2,
    Fecha: "10/03/23",
    Hora: "10:00",
    Sintomas: "Gastritis",
  },
  {
    id: 4,
    idPaciente: 4,
    idDoctor: 3,
    Fecha: "12/09/23",
    Hora: "3:00",
    Sintomas: "Nauseas por intoxicacion",
  },
];

//Funciones y utilización de ciclo for, posteriormente se podra ver en en terminal la información gracias a iterator.
console.log("Paciente:");
for (const iterator of Paciente) {
  Docotroaux = Doctor.find((ele) => ele.idDoctor === iterator.idPaciente);
  console.log(
    `--id Paciente: ${iterator.idPaciente} -- Nombre: ${iterator.Nombre} --Identificación: ${iterator.Identificacion}`
  );
}

console.log("Cita");
for (elemento of Cita) {
  console.log(
    `  --id cita: ${elemento.id}--idPaciente: ${elemento.idPaciente}--id Doctor: ${elemento.idDoctor} --Fecha:${elemento.Fecha}  --Hora:${elemento.Hora} --Sintoma:${elemento.Sintomas}`
  );
}

console.log(" Doctor");
Doctor.forEach((Doctor) => {
  console.log(
    `--id doctor: ${Doctor.idDoctor}--Nombre: ${Doctor.NombreDo} -- ${Doctor.Identificacion}`
  );
});
