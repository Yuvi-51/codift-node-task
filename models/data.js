const mongoose=require('mongoose')
const Schema=mongoose.Schema

const UserSchema=new Schema({
    title:
    {
        type:String,
        required:true
    },
    description:
    {
        type:String,
        required:true
    },
    maxNumberOfStudent:
    {
        type:Number,
        required:true
    },
    type:
    {
        type:String,
        enum : ['YOGA','PILATES','CARDIO'],
        default: 'YOGA'
    },
    
    startDate:
    {
        type:Date,
        default:Date.now
    },
    endDate:
    {
        type:Date,
        default:Date.now
    }
    
})

module.exports=Users=mongoose.model("user",UserSchema)