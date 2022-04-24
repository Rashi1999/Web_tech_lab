// Defining necessary modules
const express=require('express');
const bodyparser=require('body-parser');
const cors = require('cors');
const mysql=require('mysql2');

const app=express();

app.use(cors());
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.listen(3000, ()=>{
    console.log('Server running on PORT 3000');
})


// Making MySQL DB connection
const db=mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'student_db',
    port:3306
});

// Verifying DB COnnection
db.connect(err=>{
    if(err)
        console.log(err, 'DBerror')
    else
        console.log('DB connected');
});


// Fetching or Reading the data of all users from DB
// GET OPERATION
app.get('/user', (req, res)=>{
    let qr=`select * from user`;

    db.query(qr, (err, result)=>{
        if(err)
            console.log(err,'Error');
        if(result.length>0){
            res.send({
                message: "All users data",
                data:result
            });
        }
    });
});


// Fetching or Reading the data of a single users from DB
// GET OPERATION
app.get('/user/:id', (req, res)=>{
    let uid=req.params.id;
    let qr=`select * from user where id = ${uid}`;

    db.query(qr, (err, result)=>{
        if(err)
            console.log(err,'Error');
        if(result.length>0){
            res.send({
                message: "Single user data",
                data:result
            });
        }
        else
            res.send({message:'data not found'});
    });
});


// To create and insert new row in the DB
// POST OPERATION
// app.use(bodyparser.json({ type: 'application/vnd.api+json' }))

app.post('/user', (req, res)=>{
    let name=req.body.fullname;
    let mark=req.body.marks;
    let mb=req.body.mobile;

    // Auto Generated ID
    var qr = "insert into user(fullname, marks, mobile) values ('" + name + "', " + mark + ", " + mb +  ")";
    
    db.query(qr, (err, result)=>{
        if(err)
            console.log(err, "Error");
        else
            res.send({message: "data inserted"});
    });
});


// To Update an existing record
// PUT Operation
app.put('/user/:id', (req, res)=>{
    let uid=req.params.id;
    let name=req.body.fullname;
    let mark=req.body.marks;
    let mb=req.body.mobile;

    var qr = "update user set fullname='"+ name + "', marks="+mark+", mobile="+mb+" where id = "+uid;

    db.query(qr, (err, result)=>{
        if(err)
            console.log(err, "Error");
        else
            res.send({message: "data updated"});
    });
});


// To delete an existing record
// DELETE OPERATION
app.delete('/user/:id', (req, res)=>{
    let uid=req.params.id;

    var qr = "delete from user where id = "+uid;

    db.query(qr, (err, result)=>{
        if(err)
            console.log(err, "Error");
        else
            res.send({message: "data deleted"});
    });
});

// View Average Marks
// Avg marks updated thorugh trigger - upon insert, update and delete in user table.
app.get('/avg-marks', (req, res)=>{
    let qr=`select * from user`;

    db.query(qr, (err, result)=>{
        if(err)
            console.log(err,'Error');
        if(result.length>0){
            res.send({
                message: "All users data",
                data:result
            });
        }
    });
});
