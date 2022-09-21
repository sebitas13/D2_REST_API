const express = require('express');//import express
const mongoose = require('mongoose');
require('dotenv').config();

const postRoutes = require('./routes/post');



const app = express();// create the express app
const port = process.env.PORT || 3000;
app.use(express.json())

app.use('/api',postRoutes);       

mongoose
.connect(process.env.MONGODB_URI)
.then(()=> console.log('Conectado a MongoAtlas'))
.catch((err)=> console.error(err));
app.listen(port, () => console.log('servidor en:',port));

