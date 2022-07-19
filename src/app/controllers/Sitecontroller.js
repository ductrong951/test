const movies = require('../models/movies')
const { mutipleMongooseToObject } = require('../../util/mongoose')
class Sitecontroller{
    // Get /news
    index(req,res,next){
        movies.find({})
        .then(movies => {
            res.render('home',{
                movies: mutipleMongooseToObject(movies)
            })}
        )}
    // Get /search
    search(req,res){
        res.send('Không thể tìm kiếm')
    }
}

module.exports = new Sitecontroller;