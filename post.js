const database = require('./db');

const Notas = database.sequelize.define('notas',{
    nota:{
        type: database.Sequelize.FLOAT
    },
});

//Notas.sync({force:true})

module.exports = Notas