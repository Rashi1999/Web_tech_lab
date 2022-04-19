// The express.Router class can be used to create modular mountable route handlers. A Router instance is a complete middleware and routing system; for this reason it is often referred to as a “mini-app”.

var express = require('express');
var router = express.Router();
var Student = require('../models/dataSchema');

router.post('/create',(req,res,next) =>{
    var newStudent=new Student({
        name:req.body.name,
        department:req.body.department
    });
    newStudent.save((err,stud)=>{
        if(err)
            res.status(500).json({errmsg:err});
        res.status(200).json({msg:stud});
    });
});

router.get('/read',(req,res) =>{
    Student.find({},(err,students)=>{
        if(err)
            res.status(500).json({errmsg:err});
        res.status(200).json({msg:students});
    });
});

router.get('/read/:id',(req,res) =>{
    Student.findById(req.params.id,(err,stud)=>{
        if(err)
            res.status(500).json({errmsg:err});
        res.status(200).json({msg:stud});
    });
});


router.put('/update',(req,res) =>{
    Student.findById(req.body._id, (err,stud)=>{
        if(err)
            res.status(500).json({errmsg:err});
            stud.name=req.body.name;
            stud.department=req.body.department;
            stud.save((err,stud)=>{
            if(err)
                res.status(500).json({errmsg:err});
            res.status(200).json({msg:stud});
        });
    })
});

router.put('/update/:id',(req,res) =>{
    Student.findById({_id:req.params.id}, (err,stud)=>{
        if(err)
            res.status(500).json({errmsg:err});
            stud.name=req.body.name;
            stud.department=req.body.department;
            stud.save((err,stud)=>{
            if(err)
                res.status(500).json({errmsg:err});
            res.status(200).json({msg:stud});
        });
    })
});


router.delete('/delete/:id',(req,res) =>{
    Student.findOneAndRemove({_id:req.params.id}, (err,stud)=>{
        if(err)
            res.status(500).json({errmsg:err});
        res.status(200).json({msg:stud});
    });
});

module.exports=router;