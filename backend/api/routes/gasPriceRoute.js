const Errors = require('../utils/errors');
const request = require('request');
const infuraUrl = require('../utils/infura');

const gasPriceRoute = (req, res, next) => {
    // Set the headers
    const headers = {
        'Content-Type': 'application/json'
    };

    // Configure the request
    const options = {
        url: infuraUrl('eth_gasPrice'),
        method: 'GET',
        headers: headers,
    };

    // Start the request
    request(options, function (error, response, body) {
        if (error) {
            throw new Error.StandardError("Something went wrong: " + error.message)
        };
        if (response.statusCode === 200) {
            // Print out the response body
            console.log('success');
            console.log(body);
            res.send(body)
        };
    })
};

module.exports = gasPriceRoute;