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

app.listen(5000,()=>{
console.log('server app and running');

});