
const {Router} = require('express');

const router = Router(); 

const { renderIndex, renderNosotros, renderMenu, renderContacto, renderVentaOnline} = require('../controllers/index.controller'); 

router.get('/', renderIndex ); 

router.get('/nosotros', renderNosotros);

router.get('/menu', renderMenu);

router.get('/contacto', renderContacto);

router.get('/ventaOnline', renderVentaOnline);

module.exports = router; 