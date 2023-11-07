const express=require('express')
const cors=require('cors')
const dotenv=require('dotenv')
const connection=require('./DB/Db.config')
const bodyParser=require('body-parser')
const dataRouter=require('./Router/Data.Router')
const bankRouter=require('./Router/BankDetails.Router')

dotenv.config()

const app=express();
const port=process.env.PORT||1234
 
connection();

app.use(express.json())
app.use(express.urlencoded({extended:true}));

const corsOptions={
    origin:'http://localhost:3000/',
    methods:'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials:true,
};


 app.use(cors(corsOptions))


 app.use('/api',dataRouter);
 app.use('/api', bankRouter)

 app.listen(port,()=>{    
    console.log('Server started Successfully:', port);
 })
