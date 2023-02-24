import { Sequelize} from "sequelize";

module.exports = function (sequelize:Sequelize,DataTypes:any) {

    const User = sequelize.define('User', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { //função de validação para dizer que n pode ser vazio
                notEmpty: true
            }
        },
        email:{
            type: DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        },
        password:{
            type: DataTypes.STRING,
            allowNull:false,
            validate:{
                notEmpty:true
            }
        }

    })


    return User;

}
