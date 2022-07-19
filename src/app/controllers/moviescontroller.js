const movies = require('../models/movies')
const { mongooseToObject } = require('../../util/mongoose')
const { mutipleMongooseToObject } = require('../../util/mongoose')
class moviescontroller{
    // Get // DETAIL-PRODUCT
    detail(req,res,next){
        movies.findOne({ _id:req.params.id  })
         .then((movies) => {
            res.render('product/detailmovies', { movies: mongooseToObject(movies)})})
        .catch(next)
        }
    
        // Get // CREATE PRODUCT
    create(req,res,next){
        res.render('product/createmovies')
    }

    // POST // STORED PRODUCT
    stored(req,res,next){
        movies(req.body).save()
            .then (() => res.redirect('/movies'))
            .catch(error =>{})
    }

    list(req,res,next){
        movies.find({})
        .then(movies => {
           res.render('product/listproduct',{
                movies: mutipleMongooseToObject(movies)
            })})
        .catch(next)  
    }
    
    edit(req,res,next){
        movies.findById( req.params.id )
        .then(movies => {
           res.render('product/updateproduct',{
               movies: mongooseToObject(movies)
            })})
        .catch(next)   
    }

    // PUT /product/_id
    update(req,res,next){
        movies.updateOne({ _id:req.params.id }, req.body)
        .then(() => res.redirect('/movies'))
        .catch(next)
    }

    // DELETE /PRODUCT/id
    delete(req,res,next){
        movies.deleteOne({ _id:req.params.id })
        .then(() => res.redirect('/movies'))
        .catch(next)
    }
}

module.exports = new moviescontroller;