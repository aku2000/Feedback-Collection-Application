/* import express from 'express' 
makes use of es 2015 modules which is not supported by nodejs so in the backend part we will make use of below format that is common js modules(only in server side).*/

const express = require('express');
const app = express();

app.get('/', (req, res) =>
{
    res.send({ hi: 'There' });
});

//Dynamic Port Binding using Heroku
const PORT = process.env.PORT || 5000;
app.listen(PORT);