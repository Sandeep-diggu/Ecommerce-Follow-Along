const express = require('express');
const { connect } = require('mongoose');
const app = express();
const UserRouter = require('./controller/userRouter');


app.get('/', (req, res) => {
    try{
        res.status(200).send('Hello World');
    } catch (error) {
        res.status(500).send('Internal Server Error');
    }
})

app.use("/user", UserRouter);

app.listen(8000,async () => {
    try{
        await connect();
        console.log('Server is running on port 8000');
    }catch(error){
        console.log('Error connecting to MongoDB');
    }
});