const { Router } = require('express')
const { check } =  require('express-validator')

const { createDeportista,
     getDeportista, 
     getDeportistas,
     updateDeportista,
     deleteDeportista } = require('../controllers').Deportista;

const { validateFields } = require('../middlewares')

const router = Router();

///     https://localhost:3000/api/v1/deportistas/

router.get('/', getDeportistas);

router.get('/:id', [ 
    check('id', 'Este no es un ID de Mongo correcto').isMongoId() 
 ]  , getDeportista);

router.post('/',[
    check('name', 'El nombre es requerido').not().isEmpty(),
    validateFields
] , createDeportista)

router.put('/:id', updateDeportista)

router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteDeportista)

module.exports = router;