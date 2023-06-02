const { Router } = require('express')
const { check } =  require('express-validator')

const { createPaciente,
     getPaciente, 
     getPacientes,
     updatePaciente,
     deletePaciente } = require('../controllers').Paciente;

const { validateFields } = require('../middlewares')

const router = Router();

///     https://localhost:3000/api/v1/paciente/

router.get('/', getPacientes);

router.get('/:idPaciente', [ 
    check('idPaciente', 'Este no es un ID de Mongo correcto').isMongoId() 
 ]  , getPaciente);

router.post('/',[
    check('Nombre', 'El nombre es requerido').not().isEmpty(),
    validateFields
] , createPaciente)

router.put('/:idPaciente', updatePaciente)

router.delete('/:idPaciente',[
    check('idPaciente','Debe ser un id VALIDO de moongo').isMongoId()
], deletePaciente)

module.exports = router;