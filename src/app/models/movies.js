const mongoose = require('mongoose')
const Schema =mongoose.Schema
const slug = require('mongoose-slug-generator');
mongoose.plugin(slug);

const movies = new Schema ({
    select: { type: Number},
    title: {type: String, maxLength: 255},
    year: {type: String, maxLength: 6},
    description: { type: String, maxLength: 10000},
    rate: { type: String, maxLength: 4},
    image:{type: String},
    url: { type: String},
    slug: { type: String, "slug": ['name', ' ' ,'select'], unique:'true' }
})


module.exports = mongoose.model('movies', movies)


