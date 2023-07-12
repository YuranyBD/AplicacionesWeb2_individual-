<!-- There are multiple root elements -->
<template>
  <hr>
  <div class="container">
    <h1 class="text-center">Cita Medica:</h1>
    <form @submit.prevent="resultadoput()" class="form " v-if="vieweditarr">
      <div class="w-50 m-auto  ">
      <div class="text-center ">
          <label for="ID" class="form-label">ID</label>
          <input type="number" name="ID" v-model="resultadoedicion.ID" class="form-control" @input="validarNumero">
        </div>
        <div class="text-center ">
          <label for="Id_Paciente" class="form-label">Id_Paciente</label>
          <input type="text" name="Id_Paciente" v-model="resultadoedicion.Id_Paciente" class="form-control ">
        </div>
        <div class="text-center ">
          <label for="Id_Doctor" class="form-label">Id_Doctor</label>
          <input type="text" name="Id_Doctor" v-model="resultadoedicion.Id_Doctor" class="form-control ">
        </div>
        <div class="text-center ">
          <label for="Fecha" class="form-label">Fecha</label>
          <input type="text" name="Fecha" v-model="resultadoedicion.Fecha" class="form-control ">
        </div>
        <div class="text-center ">
          <label for="Hora" class="form-label">Hora</label>
          <input type="text" name="Hora" v-model="resultadoedicion.Hora" class="form-control ">
        </div>
        <div class="text-center ">
          <label for="Sintomas" class="form-label">Sintomas</label>
          <input type="text" name="fonetica" v-model="resultadoedicion.Sintomas" class="form-control ">
        </div>
        <div class=" d-flex justify-content-center mt-4 mb-4">
          <button class="btn btn-success w-50 " type="submit">Editar</button>
          <button class="btn btn-danger w-50 " @click="vieweditarr = false">Cancelar</button>
        </div>
      </div>

    </form>

    <hr>
    <form @submit.prevent="resultadoPost()" class="form " v-if="!vieweditarr">
      <div class="w-50 m-auto  ">
        <div class="text-center ">
          <label for="ID" class="form-label">ID</label>
          <input type="text" name="ID" v-model="resultado.ID" class="form-control">
        </div>
        <div class="text-center ">
          <label for="Id_Paciente" class="form-label">Id_Paciente</label>
          <input type="text" name="Id_Paciente" v-model="resultado.Id_Paciente" class="form-control ">
        </div>
        <div class="text-center ">
          <label for="Id_Doctor" class="form-label">Id_Doctor</label>
          <input type="text" name="Id_Doctor" v-model="resultado.Id_Doctor" class="form-control ">
        </div>
        <div class="text-center ">
          <label for="Fecha" class="form-label">Fecha</label>
          <input type="text" name="Fecha" v-model="resultado.Fecha" class="form-control ">
        </div>
        <div class="text-center ">
          <label for="Hora" class="form-label">Hora</label>
          <input type="text" name="Hora" v-model="resultado.Hora" class="form-control ">
        </div>
        <div class="text-center ">
          <label for="Sintomas" class="form-label">Sintomas</label>
          <input type="text" name="Sintomas" v-model="resultado.Sintomas" class="form-control ">
        </div>
        <div class=" d-flex justify-content-center mt-4 mb-4">
          <button class="btn btn-primary w-50 ">Enviar</button>
        </div>
      </div>
    </form>
  </div>


  <hr>

  <div class="container text-center">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">ID</th>
          <th scope="col">Id_Paciente</th>
          <th scope="col">Id_Doctor</th>
          <th scope="col">Fecha</th>
          <th scope="col">Hora</th>
          <th scope="col">Sintomas</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in resultados" :key="index">
          <th scope="row">{{ item._id }}</th>
          <td>{{ item.ID }}</td>
          <td>{{ item.Id_Paciente}}</td>
          <td>{{ item.Id_Doctor}}</td>
          <td>{{ item.Fecha }}</td>
          <td>{{ item.Hora }}</td>
          <td>{{ item.Sintomas }}</td>

          <td><button class="btn btn-danger" @click="resultadoDelete(item._id)">Eliminar</button> <button
              class="btn btn-success" @click="vieweditar(item._id)">Editar</button></td>
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
import axios from 'axios'
export default {

  data() {
    return {
      resultados: [],
      resultado: {
        ID: '',
        Id_Paciente: '',
        Id_Doctor: '',
        Fecha: '',
        Hora:'',
        Sintomas:''
      },
      resultadoedicion: {},
      vieweditarr: false

    }
  },
  created() {
    this.resultadoGet();
  },
  methods: {
    resultadoGet() {
      axios.get('http://localhost:1000/resultado')
        .then(respuesta => {
          this.resultados = respuesta.data
        })
        .catch(evento => { console.log(evento) })
    },
    resultadoPost() {
      axios.post('http://localhost:1000/resultado', this.resultado)
        .then(respuesta => {
          this.resultados.push(respuesta.data)

        })
        .catch(evento => { console.log(evento.response) })
    },
    resultadoDelete(_id) {
      axios.delete(`http://localhost:1000/resultado/${_id}`)
        .then(res => {
          const index = this.resultados.findIndex(item => item._id === res.data._id);
          this.resultados.splice(index, 1)
        })
        .catch(e => { console.log(e.response) })
    },

    vieweditar(_id) {
      this.vieweditarr = true
      axios.get(`http://localhost:1000/resultado/${_id}`)
        .then(respuesta => {
          this.resultadoedicion = respuesta.data

        })
        .catch(evento => {
          console.log(evento.response)
        })

    },
    resultadoput(item) {
      axios.put(`http://localhost:1000/resultado/${item._id}`, item)
        .then(respuesta => {
          const index = this.datos.findIndex(n => n._id === respuesta.data._id)
          this.resultados[index].ID = respuesta.data.ID
          this.resultados[index].Id_Paciente = respuesta.data.Id_Paciente
          this.resultados[index].Id_Doctor = respuesta.data.Id_Doctor
          this.resultados[index].Fecha = respuesta.data.Fecha
          this.resultados[index].Hora = respuesta.data.Hora
          this.resultados[index].Sintomas = respuesta.data.Sintomas


        })
        .catch(evento => {
          console.log(evento.response)
        })
    }


  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.container{
  background-color: rgba(40, 173, 23, 0.527);
  border-radius: 10px;
}
</style>
