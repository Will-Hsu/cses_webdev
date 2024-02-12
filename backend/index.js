import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './database/connect-db.js';
// import testDatabaseConnection from './database/db-test.js';
import connectMailchimp from './mailchimp/connect-mailchimp.js';

// import routes
import eventRoutes from './routes/event.js';
import subscriptionRoutes from './routes/emailSubscription.js';
import userRoutes from './routes/user.js';

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

// Connect to Mailchimp
connectMailchimp();

app.get('/', function (_, res) {
  res.send('CSES Web Dev Backend');
});

app.use(`${baseApi}`, eventRoutes);
app.use(`${baseApi}/subscribers`, subscriptionRoutes);
app.use(`${baseApi}/users`, userRoutes);

var server = app.listen(PORT, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
