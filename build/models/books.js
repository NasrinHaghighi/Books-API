"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const BooksSchema = new mongoose_1.default.Schema({
    name: String,
    price: Number
});
module.exports = mongoose_1.default.model('Books', BooksSchema);
