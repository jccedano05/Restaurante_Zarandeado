const{Router} = require('express');
const router = Router();

const { renderAddressForm, 
        createNewAddress, 
        renderAddresses, 
        renderEditForm, 
        updateAddress, 
        deleteAddress} = require('../controllers/domicilios.controllers');


const {isAuthenticated} = require('../helpers/auth')

// -------- Nuevo Domicilio ---------
router.get('/addresses/add', isAuthenticated ,renderAddressForm); 


router.post('/addresses/new-address', isAuthenticated, createNewAddress);



// -------- Obtener Todos Los Domicilios ---------

router.get('/addresses', isAuthenticated, renderAddresses);


// -------- Modificar Domicilios  ---------
router.get('/addresses/edit/:id', isAuthenticated, renderEditForm);    //para poner un id o dato que variara, se coloca : y el nombre que recibira esa variable (en este caso id)

router.put('/addresses/edit/:id', isAuthenticated, updateAddress);   // el put actualiza algo que ya existe (post es para un nuevo dato)




// -------- Eliminar Domicilios ---------
router.delete('/addresses/delete/:id', isAuthenticated, deleteAddress);    //con este metodo borramos lo que haya en esa ruta


module.exports = router; 