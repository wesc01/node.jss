const express = require("express")
app = express();
const handlebars = require('express-handlebars')
const bodyparser = require ('body-parser')
const admin = require ("./routes/admin")
const path = require ("path")
const Post = require ('./models/Post')
const Sequelize = require ('Sequelize')
const session = require ("express-session")
const flash = require ("connect-flash")
 

    //bodyparser
    app.use(bodyparser.urlencoded({extended: true}))
    app.use(bodyparser.json())

    // sessao 
    app.use(session({
        secret:"aquiésessao",
        resave:true,
        saveUninitialized: true
    }))
    // flash
    app.use(flash())


    //handlebars
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine', 'handlebars')
    // banco de dados       
    const sequelize = new Sequelize('neguinho', 'root','', {
        host:"localhost",
        dialect:'mysql'
    })

    
     var erros = []
  app.post(function(request ,response ,next){
if (request.body.nome || typeof request.body.nome == undefined || request.body.nome == null){
    erros.push({texto:"nome invalido"})
}
if (request.body.senhas || typeof req.body.senhas == undefined || req.body.senhas == null ){

    erros.push({texto:"slug invaido"})
}
if(req.body.nome.length< 2){s

    erros.push({texto: "nome da categoria pequeno python"})
}
if(erros.length > 0){
        res.render("admin/addcategoria",{erros: erros})
} else {
    app.post('/adad', function(req, res){
        Post.create({
            titulo: req.body.titulo,
            senhas : req.body.senhas
        }).then (function(){
            res.redirect('/')
    
        }).catch(function(erro){
            res.end("houve um erro: " + erro)
        })
    })
}
})

    



//public

    app.use(express.static(path.join(__dirname,"public")))
    // middleware controle de site 
    app.use(function(req,res,next){
        res.locals.success_msg = req.flash("success_msg")
        res.locals.error_msg = req.flash("error_msg")
        console.log("controlo de site")
        next();
    })


//rotas
app.use('/admin', admin)
app.use('/', admin)

app.listen(3000, function(req,res){
    console.log('acho')
});

