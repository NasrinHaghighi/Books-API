import mongoose from "mongoose";



const BooksSchema =new mongoose.Schema({
    name:String,
    price:Number
})

module.exports =mongoose.model('Books', BooksSchema)