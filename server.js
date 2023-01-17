const express = require("express");
const app = express();
const axios = require("axios");
const path = require("path");
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/convert", (req, res) => {
  const options = {
    method: "GET",
    url: "https://currency-converter-by-api-ninjas.p.rapidapi.com/v1/convertcurrency",
    params: {
      have: req.query.have,
      want: req.query.want,
      amount: req.query.amount,
    },
    headers: {
      "X-RapidAPI-Key": "b8eb4c64d1msh82f4f5538e5065ap1d2b92jsn7113e96b5efb",
      "X-RapidAPI-Host": "currency-converter-by-api-ninjas.p.rapidapi.com",
    },
  };

  axios
    .request(options)
    .then(function (response) {
      res.json(response.data);
    })
    .catch(function (error) {
      console.error(error);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port} - http://localhost:3000/`);
});
