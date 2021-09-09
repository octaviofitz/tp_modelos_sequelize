const db= require('../database/models')

module.exports={
    list: (req,res) => {
        let peliculas= db.Pelicula.findAll()
        .then(peliculas => res.render('moviesList',{
            peliculas
        }))
        .catch(error => console.log(error))

    },
    detail: (req,res) =>{
        let peliculas= db.Pelicula.findByPk(req.params.id)
        .then(peliculas=> res.render('moviesDetail',{
            peliculas
        }))
        .catch(error => console.log(error))

    },
    new: (req,res) =>{
        let peliculas= db.Pelicula.findAll({
            order: [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
        .then(peliculas=> res.render('moviesList',{
            peliculas
        }))
        .catch(error => console.log(error))

    },
    recomended: (req,res) => {
        let peliculas= db.Pelicula.findAll({
            order: [
                ['rating', 'DESC']
            ],
            limit: 5
        })
        .then(peliculas=> res.render('recommendedMovies',{
            peliculas
        }))
        .catch(error => console.log(error))
    }
}