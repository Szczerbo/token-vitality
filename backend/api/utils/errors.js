class ConnectionError extends Error {
    constructor (message, status) {
        super();

        Error.captureStackTrace(this, this.constructor);

        this.name = this.constructor.name;

        this.message = message ||
        'Something went wrong. Please try again.';

        this.status = status || 500
    }
}
module.exports.ConnectionError = ConnectionError;
  


class ValidationError extends Error {
    constructor (message, status) {
        super();

        Error.captureStackTrace(this, this.constructor);

        this.name = this.constructor.name;

        this.message = message ||
        'Something went wrong with validation. Please try again.';

        this.status = status || 400
    }
}
module.exports.ValidationError = ValidationError;
  