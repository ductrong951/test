const Sitecontroller = require('./sites')
const moviescontroller = require('./movies')

function route(app){
    app.use('/', Sitecontroller)
    app.use('/index', Sitecontroller)
    app.use('/movies', moviescontroller)
}

module.exports = route;