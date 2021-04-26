const {model, DataTypes} = require("sequelize");
const sequelize = require ("./config/connection");
class Employee extends model {
user.init({

id: {
    type: DataTypes.INTEGER,
    allowNull: False,
    primaryKey: True,
    autoIncrement: True,
    },

firstName:{
    type: DataTypes.STRING,
    allowNull: False,
  
},
lastName:{
    type: DataTypes.STRING,
    allowNull: False,
  
},
roleID:{
    type: DataTypes.INTEGER,
    allowNull: False,
  
},
firstName:{
    type: DataTypes.STRING,
    allowNull: False,
  
},
}
)
}


module.exports = user;
