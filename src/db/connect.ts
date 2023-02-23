const mongoose = require('mongoose')


const connectionString='mongodb+srv://nasrin60:6lrSiFnstPzqdJJs@expressnode.phhwydj.mongodb.net/book-api?retryWrites=true&w=majority'
export const connectDB = (url: any) => {
  return mongoose.connect(connectionString)
}
//mongoose.connect(connectionString)
module.exports = connectDB