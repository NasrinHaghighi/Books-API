"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const BooksSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, 'product name must be provided']
    },
    price: {
        type: Number,
        required: [true, 'product price name must be provided']
    },
    ebook: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.5
    },
    author: {
        type: String,
        required: [true, 'auther name must be provided']
    },
    descriptin: {
        type: String,
        required: [true, 'auther name must be provided']
    },
    format: {
        type: String,
        default: false
    },
    category: {
        type: String,
        required: [true, 'category must be provided']
    },
    publisher: {
        type: String,
        enum: {
            values: ['Seven Seas Entertainment, LLC', ' Dark Horse Comics,U.S.', 'Viz Media, Subs. of Shogakukan Inc', "NashreNovien"],
            message: '{value} is not value'
        }
        //enum:['Seven Seas Entertainment, LLC', ' Dark Horse Comics,U.S.', 'Viz Media, Subs. of Shogakukan Inc']
    }
});
module.exports = mongoose_1.default.model('Books', BooksSchema);
