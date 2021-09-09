module.exports= (sequelize, DataTypes) => {

    let alias= "Genero";

    let cols= {
        
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        ranking: {
            type: DataTypes.INTEGER.UNSIGNED,
            unique: true,
            allowNull: false

        },

        active: {
            type: DataTypes.BOOLEAN,
            defaultValue: '1',
            allowNull: false

        }
    }

    let config= {
        tableName: "genres",
        underscored: true
    }

    const Genre= sequelize.define(alias,cols,config)

    return Genre;










}