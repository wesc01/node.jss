const express = require("express")                  //rotas em arquivos separados
const router = express.Router()

router.get('/',function(req, res) {
    res.render("admin/index")
})
router.get('/posts',function(req, res){
    res.send("paginda de posts")
})
router.get("/categorias", function(req,res){
    res.render("admin/categorias")
})
router.get('/categorias/add', function(req, res){
    res.render("admin/addcategoria")
})

router.get('/teste', function(req, res){
    res.send("isso é um teste")
})

// validacoes 


var erros = []

if (req.body.nome || typeof req.body.nome == undefined || req.body.nome == null){
    erros.push({texto:"nome invalido"})
}
if (req.body.senhas || typeof req.body.senhas == undefined || req.body.senhas == null ){

    erros.push({texto:"slug invaido"})
}
if(req.body.nome.length< 2){

    erros.push({texto: "nome da categoria pequeno python"})
}
if(erros.length > 0){
        res.render("admin/addcategoria",{erros: erros})
}else{
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

module.exports = router