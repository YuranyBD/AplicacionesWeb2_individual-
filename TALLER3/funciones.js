///haciendo uso del archivo datos
const {Paciente, Doctor, Cita} = require ('./datos')

///ahora hacemos uso de las funciones CRUD 

///Guardar Paciente 

async function GuardarPaciente(Nombre, Identificacion) {
    try {
        const Paciente_nuevo = new Paciente({
        Nombre: Nombre,
        Identificacion: Identificacion
        });
        const PacienteSave = await Paciente_nuevo.save();
        console.log("El Paciente a sido guardado con éxito.");
    }
    catch (error) {
    console.error(error);
    }
}

///Editar Paciente

async function EditarPaciente(id, Nombre, Identificacion) {
    try {
        await Paciente.findByIdAndUpdate(id, {
        Nombre: Nombre,
        Identificacion: Identificacion
      });
      console.log("El Paciente a sido editado con éxito.");
    }
    catch (error) {
    console.error(error);
    }
}

///Eliminar Paciente

async function EliminarPaciente(id) {
    try {
        await Paciente.findByIdAndDelete(id);
        console.log("El paciente a sido eliminado con éxito.");
    }
    catch (error) {
    console.error(error);
    }
}


///Ahora hacemos lo  mismo pero con la entidad Doctor

//Guardar Doctor
async function GuardarDoctor(Nombre,Identificacion) {
    try {
        const Doctor_Nuevo = new Doctor({
            Nombre: Nombre,
            Identificacion: Identificacion
        });
        const DoctorSave = await Doctor_Nuevo.save();
        console.log("El Doctor a sido guardado con éxito.");
    }
    catch (error) {
    console.error(error);
    }
}

///Editar Doctor

async function EditarDoctor(id, Nombre, Identificacion) {
    try {
        await Doctor.findByIdAndUpdate(id, {
        Nombre: Nombre,
        Identificacion: Identificacion
      });
      console.log("El Doctor a sido editado con éxito.");
    } 
    catch (error) {
    console.error(error);
    }
}

///Eliminar Doctor 

async function EliminarDoctor(id) {
    try {
        await Doctor.findByIdAndDelete(id);
        console.log("El Doctor a sido eliminado con éxito.");
    } 
    catch (error) {
    console.error(error);
    }
}

///Ahora hacemos lo  mismo pero con la entidad Cita

///Guardar Cita 

async function GuardarCita(IdPaciente, IdDoctor, Fecha, Hora, SintomasPresentados) {
    try {
        const Cita_Nueva = new Cita({
            IdPaciente: IdPaciente,
            IdDoctor: IdDoctor,
            Fecha: Fecha,
            Hora: Hora,
            SintomasPresentados: SintomasPresentados
        });
        const CitaSave = await Cita_Nueva.save();
        console.log("La Cita a sido guardada con éxito.");
    } catch (error) {
      console.error(error);
    }
}

///Editar Cita
async function EditarCita(IdCita, IdPaciente, IdDoctor, Fecha, Hora, SintomasPresentados) {
    try {
        const CitaEditado = await Cita.findByIdAndUpdate(IdCita, {
            IdPaciente: IdPaciente,
            IdDoctor: IdDoctor,
            Fecha: Fecha,
            Hora: Hora,
            SintomasPresentados: SintomasPresentados
        });
        console.log("La Cita a sido editada con éxito.");
    } catch (error) {
        console.error(error);
    }
}

///Eliminar Cita

async function EliminarCita(IdCita) {
    try {
        const CitaEliminada = await Cita.findByIdAndDelete(IdCita);
        console.log("La cita a sido eliminada con éxito.");
    } 
    catch (error) {
    console.error(error);
    }
}

///listar registros de las entidades }

///CicloForOf

async function ListarCitaForOf() {
    try {
        const Citas = await Cita.find().populate('IdPaciente IdDoctor');
        console.log(`      CITAS`)
        console.log('************************************');
        for (const Paciente of Citas) {
          console.log(`ID: ${Citas._Id}`);
          console.log(`Paciente: ${Citas.IdPaciente.Nombre}`);
          console.log(`Doctor: ${Citas.IdDoctor.Nombre}`);
          console.log(`Fecha: ${Citas.Fecha}`);
          console.log(`Hora: ${Citas.Hora}`);
          console.log(`Sintomas Presentados: ${Citas.SintomasPresentados}`);
          console.log('************************************');
        }
      } catch (error) {
        console.log('Error al listar las Citas', error);
      }
}

///Ciclo ForEach

async function ListarPacientesForEach() {
    try {
        const cursor = await Deportista.find();
        console.log(`           PACIENTES`)
        console.log('************************************');
        cursor.forEach((valor) => {
            console.log(`Nombre: ${valor.Nombre}`);
            console.log(`Identificacion: ${valor.Identificacion}`);
            console.log('************************************');
        });
    } catch (error) {
      console.log('Error al listar Pacientes', error);
    }
}

///Ciclo While

async function ListarDoctorWhile() {
    try {
        const Doctores = await TipoEjercicio.find();
        let i = 0;
        console.log(`       DOCTORES`)
        console.log('************************************');
        while (i < Doctores.length) {
            console.log(`ID: ${Doctores[i]._Id}`);
            console.log(`Nombre: ${Doctores[i].Nombre}`);
            console.log(`Identificacion: ${Doctores[i].Identificacion}`);
            console.log('************************************');
            i++;
        }
    } catch (error) {
        console.log('Error al listar Doctores', error);
    }
}

///exportamos para poder hacer el llamado en index.js

module.exports ={
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
};


