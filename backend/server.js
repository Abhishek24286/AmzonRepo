const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const path=require('path');

const app = express();
const PORT=process.env.SERVER_PORT;


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/../public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
});
app.get('/checkout',(req,res)=>{
     res.sendFile(path.join(__dirname, '../public/checkout.html'));
});
app.get('/checkout/order',(req,res)=>{
     res.sendFile(path.join(__dirname, '../public/Orders.html'));
});

app.listen(PORT, () => {
    console.log('server is running');
});