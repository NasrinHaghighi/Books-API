import { features } from "process"

const Books =require('../models/books')


export const getAllBooks =async (req: any, res: any) =>{

    const {ebook, publisher, name, sort, fields} =req.query
    const queryObject :any={}
    if(ebook){
        queryObject.ebook= ebook === 'true' ? true :false
    }
    if(publisher){
        queryObject.publisher = publisher
    }
    if(name){
        queryObject.name = { $regex: name, $options: '<options>' }
    }
    let result= Books.find(queryObject)
    if(sort){
        const sortList = sort.split(',').join(' ')
        result = result.sort(sortList)
    }
  
    if(fields){
        const feildList = fields.split(',').join(' ')
        result = result.select(feildList)
    }
    const page=Number(req.query.page) || 1
    const limit=Number(req.query.limit) || 10
    const skip= (page-1) * limit

     result=result.skip(skip).limit(limit)
    let books= await result
    res.status(200).json({books, nbHits:books.length})
}




