const { Router } = require('express')
const { check } =  require('express-validator')

const { createCancha,
     getCancha, 
     getCanchas,
     updateCancha,
     deleteCancha } = require('../controllers').Cancha;

const { validateFields } = require('../middlewares')

const router = Router();

///     https://localhost:3000/api/v1/canchas/

router.get('/', getCanchas);

router.get('/:id', [ 
    check('id', 'Este no es un ID de Mongo correcto').isMongoId() 
 ]  , getCancha);

router.post('/',[
    check('name', 'El nombre es requerido').not().isEmpty(),
    validateFields
] , createCancha)

router.put('/:id', updateCancha)

router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteCancha)

module.exports = router;