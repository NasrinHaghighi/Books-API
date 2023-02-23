"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
require('dotenv').config();
const connectDB = require('./db/connect');
const Books = require('./models/books');
const jsonBooks = require('./books.json');
const connectionString = 'mongodb+srv://nasrin60:6lrSiFnstPzqdJJs@expressnode.phhwydj.mongodb.net/book-api?retryWrites=true&w=majority';
const start = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield connectDB(connectionString);
        yield Books.deleteMany();
        yield Books.create(jsonBooks);
        process.exit(0);
        console.log('suuucse....');
    }
    catch (error) {
        console.log(error);
        process.exit(1);
    }
});
start();
