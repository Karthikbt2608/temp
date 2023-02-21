let express=require('express')
let router=express.Router()
let userdata=[
    {
        name:"karthik",
        age:22
    },
    {
        name:"Rocky",
        age:19
    },
    {
        name:"Rudresh",
        age:18
    },
    {
        name:"Malla",
        age:17
    },
    {
        name:"Esha",
        age:15
    }
]

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
    res.render('admin',{userdata,booksdata})


})
module.exports=router;