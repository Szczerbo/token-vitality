const infuraUrl = require('./infura');

describe('infura', () => {
    it('works', () => {
        //arrange
        const method = 'eth_gasPrice';
        //act
        const url = infuraUrl(method);
        //assert
        expect(url).toEqual('https://api.infura.io/v1/jsonrpc/mainnet/eth_gasPrice?token=038c785a07534a97aa02bb693429b37d')
    });
});