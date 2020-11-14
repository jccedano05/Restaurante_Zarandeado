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
router.get('/addresses/edit/:id', isAuthenticated, renderEditForm);   

router.put('/addresses/edit/:id', isAuthenticated, updateAddress);  




// -------- Eliminar Domicilios ---------
router.delete('/addresses/delete/:id', isAuthenticated, deleteAddress);  


module.exports = router; 