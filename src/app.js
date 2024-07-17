const express = require('express');
const helmet = require('helmet');
const app = express()
const morgan = require('morgan');

//init middleware


app.use(morgan('dev'))
// morgane('combined')
// morgane('common')
// morgane('short')
// morgane('tiny')


// app.use(helmet())



//init db


//init routers

app.get('/', (req, res) => {
    return res.status(200).json({
        message: "Welcome to WSV eCommerce"
    })
})


//init error handler




module.exports = app;