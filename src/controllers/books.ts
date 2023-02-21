const Books =require('../models/books')




export const CardList = async (req: { body: any }, res: { json: (arg0: any) => void })=>{
    const book= await Books.create({name:'ppppppp'})
    res.json({book})
}


// module.exports ={
//     CardList
// }