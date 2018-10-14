const INFURA_TOKEN = '038c785a07534a97aa02bb693429b37d';
const infuraUrl = (method) => `https://api.infura.io/v1/jsonrpc/mainnet/${method}?token=${INFURA_TOKEN}`;

module.exports = infuraUrl;