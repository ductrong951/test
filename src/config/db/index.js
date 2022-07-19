const mongoose = require('mongoose')
async function connect(){
    try {
        await mongoose.connect('mongodb+srv://ductrong951:Trongbmt123@cluster0.kaeuf.mongodb.net/movies',{
          useNewUrlParser: true,
          useUnifiedTopology: true
        });
        console.log('Connected successfully!!!')
    } catch (error) {
        console.log('Connected failed!!!')
    }
}

module.exports = { connect }