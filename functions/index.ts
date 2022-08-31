import serverless from 'serverless-http';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';

const BASE = process.env.NODE_ENV === 'dev' ? `/` : `/.netlify/functions/`;

const app = express();
const router = express.Router();

router.use(compression());
router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/hello-world', (request, response) => {
    response.json({ message: "Hello World" });
});

app.use(BASE, router);

exports.handler = serverless(app);