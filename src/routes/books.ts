const express=require('express')
const router = express.Router();

import {getAllBooks } from '../controllers/books'


router.route('/').get(getAllBooks)


module.exports = router ;