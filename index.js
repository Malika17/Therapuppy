const express = require("express");
const axios = require("axios"); // Import axios
const port = 3000;
const app = express();
const uniqid = require("uniqid");

//testing
const PHONE_PE_HOST_URL = "https://api-preprod.phonepe.com/apis/pg-sandbox";
const MERCHANT_ID = "PGTESTPAYUAT";
const SALT_INDEX = 1;
const SALT_KEY = "099eb0cd-02cf-4e2a-8aca-3e6c6aff0399";

app.get("/", (req, res) => {
  res.send("PhonePe app is working");
});

app.get("/pay", (req, res) => {
  const payEndpoint = "/pg/v1/pay";
  const merchantTransactionId = uniqid();
  const userId = 123;
  const payload = {
    merchantId: MERCHANT_ID,
    merchantTransactionId: merchantTransactionId,
    merchantUserId: userId,
    amount: 10000, // paise
    redirectUrl: `http://localhost:3002/redirect-url/${merchantTransactionId}`,
    redirectMode: "REDIRECT",
    callbackUrl: "https://webhook.site/callback-url",
    mobileNumber: "9999999999",
    paymentInstrument: {
      type: "PAY_PAGE",
    },
  };
  const options = {
    method: "post",
    url: `${PHONE_PE_HOST_URL}${payEndpoint}`,
    headers: {
      accept: "text/plain",
      "Content-type": "application/json",
    },
    data: {
      // Include necessary payment data here
    },
  };

  axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      res.send(response.data);
    })
    .catch(function (error) {
      console.error(error);
      res.status(500).send(error.message);
    });
});

app.listen(port, () => {
  console.log(`App started listening on port ${port}`);
});
