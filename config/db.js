const mongoose = require('mongoose');
const config = require('config');

const dbkey = config.get('mongoURI')

const connectDB = async () => {   
    try{
        mongoose.set('strictQuery', false)
        await mongoose.connect(dbkey, {
            useNewUrlParser: true
        })
        console.log('connect')
    }
    catch(err){
        console.log(err)
    }
}

module.exports = connectDB