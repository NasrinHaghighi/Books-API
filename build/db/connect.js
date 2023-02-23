"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectDB = void 0;
const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://nasrin60:6lrSiFnstPzqdJJs@expressnode.phhwydj.mongodb.net/book-api?retryWrites=true&w=majority';
const connectDB = (url) => {
    return mongoose.connect(connectionString);
};
exports.connectDB = connectDB;
//mongoose.connect(connectionString)
module.exports = exports.connectDB;
