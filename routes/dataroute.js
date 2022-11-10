const express = require('express')
const router = express.Router()
const Users = require('../models/data')
const { check } = require('express-validator')
const {validationResult}=require('express-validator')


router.get("/all",async(req,res)=>
{
    
    try
    {
        const user=await Users.find()
      if(user)
      {
          res.send(user)
      }
      
    }
    catch(err)
    {
        console.error(err.message)
        res.send("server error")
    }
})




router.post('/data',
[
    check('title', 'title is between 4 and 80 char required').isLength({ min: 4, max: 80 }),
    check('description', 'description is between 15 and 600 char required').isLength({ min: 15, max: 600 }),
    check(
      'maxNumberOfStudent',
      'maxNumberOfStudent is between 1 to 50 numbers required'
    ).isLength({ min: 1, max: 50 })
    ], 
    async(req,res) => {
        const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array()});
      }
    const myUser = new Users({
        title: req.body.title,
        description: req.body.description,
        maxNumberOfStudent: req.body.maxNumberOfStudent,
        type: req.body.type,
        startDate: req.body.startDate,
        endDate: req.body.endDate,

    })

    try{
        const a1 =  await myUser.save() 
        res.json(a1)
    }catch(err){
        res.send('Error')
    }
})

router.get('/:id', async(req,res) => {
    try{
           const myusers = await Data.findById(req.params.id)
           res.json(myusers)
    }catch(err){
        res.send('Error ' + err)
    }
})

router.get("/search/:key",async(req,res)=>
{
    let data=await Users.find({
        "$or":[
            {
                "title":{$regex:req.params.key}
            },
            {
                "description":{$regex:req.params.key}
            },
            {
                "type":{$regex:req.params.key}
            },
            
            

        ]
    })
    res.send(data)
})
module.exports = router