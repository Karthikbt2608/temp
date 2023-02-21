let express=require('express')
let router=express.Router()
let booksdata=[
    {
        title:"Ramayana",
        author:"valmiki",
        id:1
    },
    {
        title:"malegalalli madhumagalu",
        author:"kuvempu",
        id:1

    }
    ,
    {
        title:"ajjiya kathegalu",
        author:"dara bendre",
        id:1
    }

]

router.get('/',(req,res)=>{
    res.render("user",{booksdata})
})

module.exports=router;
