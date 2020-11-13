const mongoose = require('mongoose');

const {NOTES_APP_MONGODB_HOST, NOTES_APP_MONGODB_DATABASE} = process.env; 

//const MONGODB_URI = `mongodb://${NOTES_APP_MONGODB_HOST}/${NOTES_APP_MONGODB_DATABASE}`;

const MONGODB_URI = "mongodb+srv://jccedano5:cedano123321@cluster0.a1e2k.mongodb.net/restauranteZarandeadoWeb";

//const MONGODB_URI = `mongodb+srv://${NOTES_APP_MONGODB_HOST}@cluster0.a1e2k.mongodb.net/${NOTES_APP_MONGODB_DATABASE}`;


mongoose.connect(MONGODB_URI,{  
    useUnifiedTopology: true, //req
    useNewUrlParser: true,    //req  
    useCreateIndex: true      //req
})
    .then(db => console.log('Database is connected'))
    .catch(err => console.log(err));