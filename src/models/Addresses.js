const {Schema, model} = require('mongoose');  

const AddressesSchema = new Schema({   
    addressName:{
        type:String,
        required: true
    },
    street:{
        type:String,
        required: true
    },
    noExt: {
        type:Number,
        required: true
    },
    noInt: {
        type:Number
    },
    CP: {
        type:Number,
        required: true
    },
    suburb:{
        type:String,
        required: true
    },
    city:{
        type:String,
        required: true
    },
    state:{
        type:String,
        required: true
    },
    reference:{
        type:String
    },
    user: {
        type: String,
        required: true
    }
}, { 
        timestamps: true //declaramos que nos cree automaticamente CreateAt UpdateAt que son cuando se creo y modifico 
    
});

module.exports = model('Address', AddressesSchema);  //este es el modelo que usaremos en todas partes 