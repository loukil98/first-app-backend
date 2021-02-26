const express = require('express')
const articleRouter = express.Router()
const Article = require('../schemas/articleSchema')
articleRouter.post('/',async (req,res)=>{
   const newArticle = new Article({
       name : req.body.name ,
       description : req.body.description ,
        price : req.body.price ,
        picture: req.body.picture
   })
   try{
    const savedArticle = await newArticle.save()
    res.json(savedArticle)
   }catch(err){
    res.status(400).json(err);
   }
})
articleRouter.get('/',async (req,res)=>{
    try{
        const articles = await Article.find()
        res.json(articles)

    }catch (e) {
        console.log(e)
        res.json(e)
    }
})
articleRouter.get('/:id',async(req,res)=>{
    try {
        const article = await Article.find({_id:req.params.id})
        console.log(article)
        res.send(article)
    }catch (e) {
        console.log(e)
        res.json(e)
    }
})
articleRouter.delete("/:id",async (req,res)=>{
    try {
        const removedItem = await Article.remove({_id:req.params.id})
        res.json(removedItem)
    }catch (e) {
        console.log(e)
    }

})
module.exports = articleRouter