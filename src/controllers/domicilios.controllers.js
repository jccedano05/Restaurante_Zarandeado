const addressesCtrl = {};

const Address = require('../models/Addresses'); 


// GET - URL CREAR DOMICILIO
addressesCtrl.renderAddressForm = (req, res) => {  
    res.render('addresses/new-address.hbs');
};



// POST - URL CREAR DOMICILIO
addressesCtrl.createNewAddress = async (req, res) => {  
    const {addressName, street, noExt, noInt, CP, suburb, city, state, reference} = req.body;

    const newAddress = new Address({addressName, street, noExt, noInt, CP, suburb, city, state, reference}) 
   
    newAddress.user = req.user.id; 

    await newAddress.save(); 

    req.flash('success_msg', 'Address Added Successfully');

    res.redirect('/addresses')

};




addressesCtrl.renderAddresses = async (req, res) => { 
  const addresses = await Address.find({user: req.user.id}); 
  res.render('addresses/all-addresses', {addresses}); 
}


addressesCtrl.renderEditForm = async (req, res) => {  
    const address = await Address.findById(req.params.id)
    if(address.user != req.user.id){   
        req.flash('error_msg', 'Not Authorized');
        return res.redirect('/addresses');
    }
    res.render('addresses/edit-address', {address});
}


addressesCtrl.updateAddress = async (req, res) => {
    const {addressName, street, noExt, noInt, CP, suburb, city, state, reference} = req.body;
    await Address.findByIdAndUpdate(req.params.id, {addressName, street, noExt, noInt, CP, suburb, city, state, reference});

    req.flash('success_msg', 'Address Updated Successfully');

    res.redirect('/addresses');
}




addressesCtrl.deleteAddress = async (req, res) => {
 
    const address = await Address.findById(req.params.id)
    if(address.user != req.user.id){  
        req.flash('error_msg', 'Not Authorized');
        return res.redirect('/addresses');
    }
    
    await Address.findByIdAndDelete(req.params.id);
    req.flash('success_msg', 'Address Deleted Successfully');

    res.redirect('/addresses');
}

module.exports = addressesCtrl;
