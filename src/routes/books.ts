const express=require('express')
const router = express.Router();

import { CardList }from '../controllers/books'


router.route('/').get(CardList)


module.exports = router ;