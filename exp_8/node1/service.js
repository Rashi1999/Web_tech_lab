function greeting(req,res){
    var username=req.query.userName;
    res.send("Greeting to "+username+" from the sever !");
}
function addition(req,res){
    var n1=req.body.num1;
    var n2=req.body.num2;
    var sum=parseInt(n1)+parseInt(n2);
    res.send(n1+' plus '+n2+' is equal to '+sum);
}
var attachService=function(app){
    app.get('/svc/greeting',greeting);
    app.post('/svc/addition',addition)
};

exports.attachService=attachService;