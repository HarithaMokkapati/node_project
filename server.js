const express = require('express');
const app = express();
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json()); //req.body

const Menu = require('./models/menu');

app.get('/', function(req, res){
    res.send('connection established')
})

//Import Router file

const personRouter = require('./routes/personRoutes');
app.use('/person',personRouter)

app.listen(3000, () => {
    console.log('listening on 3000');
})