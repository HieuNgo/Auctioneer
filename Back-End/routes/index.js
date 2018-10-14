var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var payerId = "LM6NCLZ5RAKBY";
var customerProfileId = "123212";
var customerPaymentProfileId = "2132322";
var customerProfileShippingId = "123132";
var amount = "12.23";
var subscriptionId = "123234";
var days = 34;

custonmerInfo = {
  address = {
    //Set the customer's Bill To address
    'firstName' = "Ellen",
    'lastName' = "Johnson",
    'address' = "14 Main Street",
    'city' = "Pecan Springs",
    'state' = "TX",
    'zip' = "44628",
    'country' = "USA"
  },
  creditCard = {
    'cardNumber': "4111111111111111",
    'expirationDate' = "2020-12"

  },
  'payerId': payerId,
  'customerProfileId': customerProfileId,
  'customerPaymentProfileId': customerPaymentProfileId,
  'customerProfileShippingId': customerProfileShippingId,
  'amount': amount,
  'subscriptionid': subscriptionid,
  'days': days
}

$.ajax({
  url: "./authorize/charge-credit-card.py",
  type: "post",
  contentType: "application/json; charset=utf-8",
  dataType: "json",
  data: JSON.stringify(custonmerInfo),
  success: function(response){
      //window.location="http://mycity.parseapp.com/city/cgi-bin/test1.py"
      console.log(response.message);
      console.log(response.keys);
      console.log(response.data);
  }
});

module.exports = router;
