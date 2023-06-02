const { Router } = require('express');
const { check } =  require('express-validator')


const {
    createCita,
    getCita,
    getCitas,
    updateCita,
    deleteCita
} = require('../controllers').Cita;

const { validateFields } = require('../middlewares')

const router= Router();

router.get('/', getCitas );
router.get('/:id'
,check('id', 'Este no es un ID de Mongo correcto').isMongoId()
 , getCita );

 router.post('/',[
    check('Nombre', 'El nombre es requerido').not().isEmpty(),
    validateFields
], createCita);


 router.put('/:id', updateCita);

 router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteCita);



module.exports = router;