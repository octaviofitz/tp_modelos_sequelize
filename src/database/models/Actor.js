module.exports= (sequelize, DataTypes) => {

    let alias= 'Actores'

    let cols= {
        id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },

        first_name: {
            type: DataTypes.STRING(100),
            allowNull: false
        },

        last_name: {
            type: DataTypes.STRING(100),
            allowNull: false

        },

        rating: {
            type: DataTypes.DECIMAL(3,1),
            defaultValue: null,

        },

        favorite_movie_id:{
            type: DataTypes.INTEGER.UNSIGNED
        }
    }

    let config= {
        tableName: 'actors',
        timestamps: true,
        underscored: true,
    }


    const Actor= sequelize.define(alias,cols,config);

    return Actor;
}