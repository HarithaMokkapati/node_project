const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body

const Menu = require('./models/menu');
const PORT = process.env.PORT || 3000

app.get('/', function(req, res){
    res.send('connection established')
})

//Import Router file

const personRouter = require('./routes/personRoutes');
app.use('/person',personRouter)


app.listen(PORT, () => {
    console.log('listening on 3000');
})