const mongoose=require('mongoose')

const db="mongodb://localhost:27017/data"

const connectDB= async()=>
{
    try{
        await mongoose.connect(db,{useUnifiedTopology:true,useNewUrlParser:true,useFindAndModify:false})
         console.log("connected....")
    }
    catch(err)
    {
     
    }
}

module.exports=connectDB