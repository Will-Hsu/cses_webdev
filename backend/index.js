import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';

// initialize the application
const app = express();

// load environment variables
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;

app.get('/', function (_, res) {
  res.send('Hello World');
});

var server = app.listen(PORT, '127.0.0.1', function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
