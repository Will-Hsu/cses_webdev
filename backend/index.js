import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './database/connect-db.js';
// import testDatabaseConnection from './database/db-test.js';

// import routes
import eventRoutes from './routes/event.js';

// initialize the application
const app = express();

// load environment variables
dotenv.config();

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

const PORT = process.env.PORT || 5000;
const baseApi = '/api/v1';

// Connect to MongoDB
connectDB();

// For testing database connection
// testDatabaseConnection();

app.get('/', function (_, res) {
  res.send('CSES Web Dev Backend');
});

app.use(`${baseApi}`, eventRoutes);

var server = app.listen(PORT, '127.0.0.1', function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
