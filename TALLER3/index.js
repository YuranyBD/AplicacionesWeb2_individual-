const {
    GuardarPaciente,
    EditarPaciente,
    EliminarPaciente,
    GuardarDoctor,
    EditarDoctor,
    EliminarDoctor,
    GuardarCita,
    EditarCita,
    EliminarCita,
    ListarCitaForOf, 
    ListarPacientesForEach, 
    ListarDoctorWhile
} = require ('./funciones')
///con el uso de las siguientes funciones vamos a poder guardar, eliminar y asi mismo poder editar las funciones 
///guardar entidades
    GuardarPaciente(

        "Carol Pamela Vera Castro",
        "1351023989"

    );

    GuardarDoctor(

        "Jorge Luis Vera Castro",
        "13457234568"

    );

    GuardarCita(

        "El ID del paciente ya se encuentra registrado",
        "El ID del doctor ya se encuentra registrado",
        "12/09/23",
        "3:00",
        "Gastritis",

    );

///editar entidades
    EditarPaciente(

        "Id del Paciente a editar",
        "Carol Virginia Vera Castro",
        "1351023999"
    );

    EditarDoctor(

        "Id del Doctor a editar",
        "Jorge Luis Castro Perez",
        "1317004412"

    );

    EditarCita(

        "Id del paciente",
        "Id del doctor",
        "13/09/23",
        "5:00",
        "Id de la Cita a editar"

    );

//eliminar las entidades (el registro debe existir)
    EliminarPaciente(

    "Id del Paciente a eliminar"

    );
    EliminarDoctor(

        "Id del Doctor a eliminar"
    
        );

    EliminarCita(

    "Id de la Cita a eliminar"

    );

///listar por consola 
    ListarCitaForOf(); 
    ListarPacientesForEach();
    ListarDoctorWhile();