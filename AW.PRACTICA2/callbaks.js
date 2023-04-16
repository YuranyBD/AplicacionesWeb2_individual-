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


function buscarpacienteId(id, callback) //primero se llama a la funcion y luego al callback
 {
    const  Pacientes=  Paciente.find((Pacientes)=>  Pacientes.id=== id );
    if (!Pacientes)
    {
         // Se crea un error.
        const error =  new Error();
        error.message=`El Paciengte no encontrado con id ${id}`;
        return callback(error)
    }
    return callback(null, Pacientes);
 }
 //Find: Recorrer cada uno de las citas 
 function buscarCitaporid(id, callback)
 {
     const citas = Cita.find((citas)=> citas.id=== id);   //5==='5'
     if (!citas)
     {
         const error =  new Error();
         error.message=`Cita con id ${id} no ha podido ser encontrado`;
         return callback(error)
     }
     return callback(null, citas);
 }

 buscarpacienteId(3, (err, Pacientes)=>{
    if (err)
    {
        console.log(err.message);
        return;
    }
    buscarCitaporid(Pacientes.id  , (err, citas)=>{
        if (err)
        {
            console.log(err.message);
            return;
        }
        Pacientes.citas = citas;
        delete Pacientes.id;
        console.log(Pacientes);
        
    })
 })

