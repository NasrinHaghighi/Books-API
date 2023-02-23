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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllBooks = void 0;
const Books = require('../models/books');
const getAllBooks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { ebook, publisher, name, sort, fields } = req.query;
    const queryObject = {};
    if (ebook) {
        queryObject.ebook = ebook === 'true' ? true : false;
    }
    if (publisher) {
        queryObject.publisher = publisher;
    }
    if (name) {
        queryObject.name = { $regex: name, $options: '<options>' };
    }
    let result = Books.find(queryObject);
    if (sort) {
        const sortList = sort.split(',').join(' ');
        result = result.sort(sortList);
    }
    if (fields) {
        const feildList = fields.split(',').join(' ');
        result = result.select(feildList);
    }
    const page = Number(req.query.page) || 1;
    const limit = Number(req.query.limit) || 10;
    const skip = (page - 1) * limit;
    result = result.skip(skip).limit(limit);
    let books = yield result;
    res.status(200).json({ books, nbHits: books.length });
});
exports.getAllBooks = getAllBooks;
