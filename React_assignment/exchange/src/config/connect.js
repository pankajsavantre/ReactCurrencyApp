const mysql= require("mysql");
const express=require("express");
const cors=require("cors");

const app=express();

app.use(express.json());
app.use(cors());



//db config
const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"react_user"
});
//connect to db
con.connect(function(error){
    if(error) throw error
    else console.log("connected to the database successfully!");
});

// Signup
app.post("/signup",(req,res)=>{

    const user_name=req.body.user_name;
    const password=req.body.password;
    

    con.query(
        "SELECT * FROM user WHERE user_name= ? AND password= ?",
    [user_name,password],
    (err,result)=>{
        if(err){
            res.send({err:err});
        }

        if(result.length > 0)
        {
            res.send({ message : "Username Already Exists"});       
         }
        else{
            con.query("INSERT INTO user(user_name,password) VALUES (?,?)",
            [user_name,password],
            (err,rest)=>{
                if(err){
                    res.send({err:err});
                }
                else(rest.length != 0)
                {
                    res.send({ msg : "1"});
                }
             }
            );
        }
     }
     );


    
});

//login
app.post("/login",(req,res)=>{

    const user_name=req.body.user_name;
    const password=req.body.password;

    con.query(
        "SELECT * FROM user WHERE user_name= ? AND password= ?",
    [user_name,password],
    (err,result)=>{
        if(err){
            res.send({err:err});
        }

        if(result.length > 0)
        {
            res.send(result);
        }
        else{
            res.send({ message : "Wrong username/Password combination"});
        }
     }
     );
});


//set app port
app.listen(3001,()=>{
    console.log("Server is Running!");
});


