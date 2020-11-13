const indexCtrl = {};

indexCtrl.renderIndex = (req,res)=> { 
    res.render('index.hbs') 
}

indexCtrl.renderNosotros = (req,res)=> {  
    res.render('nosotros.hbs');  
}

indexCtrl.renderMenu = (req,res)=> {  
    res.render('menu.hbs');  
}

indexCtrl.renderContacto = (req,res)=> {  
    res.render('contacto.hbs');  
}

indexCtrl.renderVentaOnline = (req,res)=> {  
    res.render('ventaOnline.hbs');  
}

module.exports = indexCtrl;  