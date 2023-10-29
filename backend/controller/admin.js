const { json } = require('body-parser')
const Cricket=require('../models/cricket')

exports.postCricket=(req,res,next)=>{
    const {name,dob,image,place,career,matches,fifty,century,wickets,average,id}=req.body
    console.log(req.body)
    if(id==0){
        Cricket.create({
            name:name,
            DOB:dob,
            image:image,
            place:place,
            career:career,
            matches:matches,
            fifties:fifty,
            centuries:century,
            wickets:wickets,
            average:average
        }).then(result=>{
            res.json(result)
        }).catch(err=>console.log(err))
    }
    else{
        Cricket.create({
            id:id,
            name:name,
            DOB:dob,
            image:image,
            place:place,
            career:career,
            matches:matches,
            fifties:fifty,
            centuries:century,
            wickets:wickets,
            average:average
        }).then(result=>{
            res.json(result)
        }).catch(err=>console.log(err))
    }
}

exports.getCricket=(req,res,next)=>{
    const name=req.params.playerName
    Cricket.findAll({
        where:{
            name:name
        }
    }).then(result=>{
        res.json(result)
    }).catch(err=>console.log(err))
}

exports.deleteCricket=(req,res,next)=>{
    const id=req.params.id
    Cricket.destroy({
        where:{
            id:id
        }
    }).then(result=>{

    }).catch(err=>console.log(err))
}