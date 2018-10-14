const operationsRoute = require('./api/routes/operationsRoute');
const gasPriceRoute = require('./api/routes/gasPriceRoute');
const bnbData = require('./api/utils/bnbData');
const express = require('express');
const errorMiddleware = require('./api/middlewares/error');
const Errors = require('./api/utils/errors');

const app = express();

app.listen(3333, () => {
	console.log('Server running on port 3333');
});

app.get('/operations', operationsRoute);
app.get('/gasPrice', gasPriceRoute);

app.use(errorMiddleware);

bnbData();