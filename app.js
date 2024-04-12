const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send("API is running");
})

const start = async()=>{
    try {
        app.listen(PORT, ()=>{
            console.log(`Connected to port ${PORT}`);
        } )
    } catch (error) {
        console.log(error);
    }
}

start();



