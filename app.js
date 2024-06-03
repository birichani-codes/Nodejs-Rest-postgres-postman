require('dotenv').config({ path: `${process.cwd()}/.env` });
const express = require ('express');
const authRouter = require ('./routes/authRoute');
const app = express();

app.get('/', (req,res) =>{
res.status(200).json({
status:'success',
message: 'Wohoo! The App REST APIs are working',

});
});

//all routes
app.use('/api/v1/auth',authRouter);

app.use ('*',(req,res, next)=>{
 res.status(404).json({
 status:'fail',
 message:"Route not found",});

});
const PORT = process.env.APP_PORT || 4000;
app.listen(process.env.APP_PORT,()=>{
console.log('server app and running');

});