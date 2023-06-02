const express =  require('express');
const cors = require('cors');

const { dbConnection } =  require('./database/config');


class Server 
{
    constructor()
    {
        this.app = express.Router();
        this.router = express.Router();

        this.port = process.env.PORT;

        this.paths = {
            doctores: '/api/doctores',
            pacientes: '/api/pacientes',
            citas: '/api/citas'
        }

        this.connectDB();
        this.middlewares();
        this.routes();
        this.router.use('/v1/inventory', this.app);
        this._express = express().use(this.router);
    }
    async connectDB(){
        await dbConnection();
    }
    middlewares(){
        this.app.use(cors());
        this.app.use(express.json())
        this.app.use(express.static('public'));
        this.app.use( '/uploads/', express.static('uploads'))

    }
    routes(){
        this.app.use(this.paths.doctores, require('./routes/doctores')   )
        this.app.use(this.paths.pacientes, require('./routes/pacientes')   )
        this.app.use(this.paths.citas, require('./routes/citas')   )
    }

    listen(){
        this._express.listen(this.port, ()=>{
            console.log(`Servidor ejecuntando en puerto ${this.port}`)
        })
    }


}


module.exports = Server;

//para poder ver en Postman, utilizamos este lick con sus apis 
//http://localhost:3000/v1/inventory/api/pacientes
//http://localhost:3000/v1/inventory/api/doctores
//http://localhost:3000/v1/inventory/api/citas