const express = require('express'); 
const path = require('path');  
const exphbs = require('express-handlebars');  
const { extname } = require('path');
const morgan = require('morgan');   
const methodOverride = require('method-override');  
const flash = require('connect-flash');
const session =require('express-session');
const passport = require('passport');


//----------INICIALIZACIONES------------
const app = express();
require('./config/passport');


//----------CONFIGURACIONES------------

app.set('port', process.env.PORT || 4000)

app.set('views', path.join(__dirname , 'views')); 


//HandleBars
app.engine('.hbs',exphbs({  
    defaultLayout: 'main.hbs',
    layoutsDir: path.join(app.get('views'),'layouts'), 
    partialsDir: path.join(app.get('views'),'partials'), 
    extname: '.hbs' 
}));
app.set('view engine', '.hbs');  




//----------MIDDLEWARES------------
app.use(morgan('dev'));

app.use(express.urlencoded({extended: false}));

app.use(methodOverride('_method'));

app.use(session({  
    secret: 'secret',
    resave: true, 
    saveUninitialized: true 
}));

app.use(passport.initialize());  
app.use(passport.session());     

app.use(flash());





//----------VARIABLES GLOBALES------------


app.use((req, res, next) => { 

    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    res.locals.user = req.user || null;  //ponemos en una variable global lo que tenga passport (user) y si no trae nada ponemos null para que no de error
    next();
});




//----------ARCHIVOS ESTATICOS------------

app.use(express.static(path.join(__dirname , 'public')));








//----------RUTAS------------
app.use(require('./routes/index.routes'));
app.use(require('./routes/addresses.routes'));
app.use(require('./routes/users.routes'));




//----------EXPORTACION------------
module.exports = app;