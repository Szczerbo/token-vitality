let Web3 = require('web3');
const bnbAbi = require('./bnbAbi');

const INFURA_TOKEN = '038c785a07534a97aa02bb693429b37d';
const sampleBnbWalletAddress = '0xfE9e8709d3215310075d67E3ed32A380CCf451C8';
const bnbTokenAddress = '0xB8c77482e45F1F44dE1745F52C74426C631bDD52';

const bnbData = () => {

    contractAbi = bnbAbi;
    let web3 = new Web3(new Web3.providers.HttpProvider(`https://mainnet.infura.io/https://mainnet.infura.io/v3/${INFURA_TOKEN}`));
    // var token = new web3.eth.Contract(contractAbi, bnbTokenAddress);

    web3.eth.getTransactionCount(sampleBnbWalletAddress).then(response => {
        console.log(response);
    }).catch((err) => {
        reject(err);
    });
}

module.exports = bnbData;