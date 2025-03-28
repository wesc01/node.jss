const dbb = require ('./dbb')

const postagem = dbb.sequelize.define('banco_de_dados_blog',{

titulo : {
    type : dbb.Sequelize.STRING
},
 senhas :{
    type : dbb.Sequelize.TEXT
 } 
})
module.exports = postagem

//postagem.sync({force:true})
