const { Router } = require('express');
const { check } =  require('express-validator')


const {
    createSeparacion,
    getSeparacion,
    getSeparaciones,
    updateSeparacion,
    deleteSeparacion
} = require('../controllers').Separacion;

const { validateFields } = require('../middlewares')

const router= Router();

router.get('/', getSeparaciones );
router.get('/:id'
,check('id', 'Este no es un ID de Mongo').isMongoId()
 , getSeparacion );

 router.post('/',[
    check('nombre', 'EL nombre es requerido').not().isEmpty(),
    validateFields
], createSeparacion);


 router.put('/:id', updateSeparacion);

 router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteSeparacion);



module.exports = router;