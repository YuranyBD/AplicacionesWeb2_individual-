const Paciente = [
    {
      id: 1,
      Nombre: "Carol Pamela Vera Castro",
      Identificacion: "1351023989",
    },
    {
      id: 2,
      Nombre: "Omar Adrian Ponce Quiroz",
      Identificacion: "1309848859",
    },
    {
      id: 3,
      Nombre: "Marcos Enrique Barcia Falconis",
      Identificacion: "14567892309",
    },
    {
      id: 4,
      Nombre: "Greily Yurany Bravo Delgado",
      Identificacion: "13156778948",
    },
  ];

  const Cita = [
    {
      id: 1,
      id: 1,
      idDoctor: 1,
      Fecha: "12/09/23",
      Hora: "3:00",
      Sintomas: "Gastritis",
    },
    {
      id: 2,
      id: 2,
      idDoctor: 2,
      Fecha: "19/05/23",
      Hora: "2:00",
      Sintomas: "Alergias",
    },
    {
      id: 3,
      id: 3,
      idDoctor: 2,
      Fecha: "10/03/23",
      Hora: "10:00",
      Sintomas: "Gastritis",
    },
    {
      id: 4,
      id: 4,
      idDoctor: 3,
      Fecha: "12/09/23",
      Hora: "3:00",
      Sintomas: "Nauseas por intoxicacion",
    },
  ];

async function buscarpacienteId(id)
{
    const   Pacientes= Paciente.find((Pacientes)=> Pacientes.id=== id);
    if (!Pacientes)
    {
        const error= new Error();
        error.message=`El paciente con id ${id} no pudo ser encontrado`;
        throw error;
    }
    return Pacientes;
}
// Las funciones asíncronas se usan para eventos de esperas como buscar un dato en una BD.
function buscarCitaporid(id)
{
    const citas = Cita.find((citas)=> citas.id===id);
    if (!citas)
    {
        const error = new Error();
        error.message=`La cita con id ${id} no pudo ser encontrado`;
        throw error;
    }
    return citas;
}



(async ()=> {
    try {
        const Pacientes =   await buscarpacienteId(1);
        const citas = await buscarCitaporid( Pacientes.id);
        Pacientes.citas= citas;
        delete Pacientes.id;
        console.log(Pacientes);
    } catch (error) {
        console.log(error.message)
    }
})();
