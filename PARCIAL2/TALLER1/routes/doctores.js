const { Router } = require('express')
const { check } =  require('express-validator')

const { createDoctor,
     getDoctor, 
     getDoctores,
     updateDoctor,
     deleteDoctor } = require('../controllers').Doctor;

const { validateFields } = require('../middlewares')

const router = Router();

///     https://localhost:3000/api/v1/doctores/

router.get('/', getDoctores);

router.get('/:id', [ 
    check('id', 'Este no es un ID de Mongo correcto').isMongoId() 
 ]  , getDoctor);

router.post('/',[
    check('Nombre', 'El nombre es requerido').not().isEmpty(),
    validateFields
] , createDoctor)

router.put('/:id', updateDoctor)

router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteDoctor)

module.exports = router;