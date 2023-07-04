const { Router } = require('express');
const { check } =  require('express-validator')


const {
    createDoctor,
    getDoctores,
    getDoctor,
    updateDoctor,
    deleteDoctor
} = require('../controllers').Doctor;

const { validateFields } = require('../middlewares')

const router= Router();

router.get('/', getDoctores );
router.get('/:id'
,check('id', 'Este no es un ID de Mongo correcto').isMongoId()
 , getDoctor );

 router.post('/',[
    check('name', 'EL nombre es requerido').not().isEmpty(),
    validateFields
], createDoctor);


 router.put('/:id', updateDoctor);

 router.delete('/:id',[
    check('id','Debe ser un id de mongo VALIDO').isMongoId()
], deleteDoctor);



module.exports = router;