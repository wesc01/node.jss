const Sequelize = require ('Sequelize')                              /*<----  conectar com o banco de dados */
const sequelize = new Sequelize('neguinho', 'root','', {

    host:"localhost",
    dialect:'mysql'
})
module.exports = {
Sequelize : Sequelize,
sequelize : sequelize
}



sequelize.authenticate().then(function(){
    console.log("conectado com sucesso ")
 }).catch(function(erro){
    console.log("falha ao se conectaar"+erro)
 })
