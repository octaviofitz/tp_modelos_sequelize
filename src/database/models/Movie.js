module.exports= (sequelize, DataTypes) => {

    let alias= "Pelicula";

    let cols= {
        
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },

        title: {
            type: DataTypes.STRING(500),
            allowNull: false
        },

        rating: {
            type: DataTypes.DECIMAL(3,1).UNSIGNED,
            allowNull: false
        },

        awards: {
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue: '0',
            allowNull: false
        },

        release_date: {
            type: DataTypes.DATE,
            allowNull: false
        },

        length: {
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue: null
        },

        genre_id: {
            type: DataTypes.INTEGER.UNSIGNED,
            defaultValue: null
        }
    }

    let config= {
        tableName: 'movies',
        timestamps: true,
        underscored: true
    }

    const Movie= sequelize.define(alias,cols,config)

    return Movie;










}