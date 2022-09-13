const express = require('express');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.listen(3000, function(){
    console.log('The port 3000 is active');
});

app.get('/orders', function(req, res){
    res.sendFile(__dirname+ "/index.html");
});

app.post('/orders', function(req, res){
    var client = req.body.client;
    var latitude = req.body.latitude;
    var longitude = req.body.longitude;
    var itemname1 = req.body.itemname1;
    var count1 = req.body.count1;
    var price1 = req.body.price1;
    var total = count1 * price1;
    var discount = '80%';
    var totalafterdis = total * discount;

    res.send("{<br>orders:[<br>{ <br> Customer:" + client +
     ",<br>address:{ <br> latitude: "+ latitude + ",<br> longitude: " + longitude
     + ",<br>}, <br> items:[ <br> { <br> name: " + itemname1 + ",<br> count1: " + count1+
     ",<br> price: "+ price1 + ",<br> total: "+ total + ",<br> } <br> ], <br> total: " + total +
       ",totalAfterDiscount: "+ totalafterdis);
})