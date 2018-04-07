const express = require('express')

let app = express();

app.get('/', (req,res,next) => {
    res.send("Hello there")
})

app.listen(process.env.PORT || 3000, () => {
    console.log("App is listening");  
})