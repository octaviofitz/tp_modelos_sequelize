const db= require('../database/models')

module.exports= {
    list: (req,res) => {
        let generos= db.Genero.findAll()
        .then(generos=> res.render('genresList',{
            generos
        }))
        .catch(error => console.log(error))

    },
    detail: (req,res) =>{
        let generos= db.Genero.findByPk(req.params.id)
        .then(generos=> res.render('genresDetail',{
            generos
        }))
        .catch(error => console.log(error))
    }
}