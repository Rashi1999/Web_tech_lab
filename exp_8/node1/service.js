const Joi=require('joi');

function greeting(req,res){
    var username=req.query.userName;
    const schema = Joi.object().keys({ userName: Joi.string().regex(/^[ A-Za-z]+$/).min(3).max(30).required(),
        });
    const dataToValidate = { 
        userName: username,
        }
    const result = schema.validate(dataToValidate);
    if(result.error){
        res.status(400).send("<h1 style='color:red;font-size:30px'>"+result.error.details[0].message);
        return;
    }
    res.send("<br><span style='font-size:30px'>Greeting to <span style='color:blue;font-size:30px'>"+result.value.userName+" </span>from the sever !</span>");
}

function addition(req,res){
    var n1=req.body.num1;
    var n2=req.body.num2;
    
    const schema = Joi.object().keys({ num1: Joi.number().required(), num2: Joi.number().required()});
    const dataToValidate = { 
        num1:n1,
        num2:n2
        }
    const result = schema.validate(dataToValidate);
    if(result.error){
        res.status(400).send("<h1 style='color:red;font-size:20px;'>"+result.error.details[0].message);
        return;
    }
    var sum=parseInt(n1)+parseInt(n2);
    // res.send("Greeting to <span style='color:blue;font-size:20px'>"+result.value.userName+" </span>from the sever !");
    res.send("<br><span style='color:green;font-size:100px;'>"+n1+"</span>"
    +"<span style='color:blue;font-size:100px'> + </span>"
    +"<span style='color:green;font-size:100px'>"+n2+"</span>"
    +"<span style='color:blue;font-size:100px'> = </span>"
    +"<span style='color:red;font-size:100px'>"+sum+"</span>");
}

var attachService=function(app){
    app.get('/svc/greeting',greeting);
    app.post('/svc/addition',addition)
};

exports.attachService=attachService;