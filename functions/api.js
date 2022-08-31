const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

router.get('/hello-world', (req, res) => {
    res.send({ message: 'Hello World' });
});

app.use('/.netlify/functions/api', router);

module.exports = app;
module.exports.handler = serverless(app);