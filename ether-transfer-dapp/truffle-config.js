const HDWalletProvider = require('@truffle/hdwallet-provider');
const Web3 = require('web3');

const provider = new HDWalletProvider(
    'YOUR_MNEMONIC', // Replace with your mnemonic
    'https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID' // Replace with your Infura project URL
);

const web3 = new Web3(provider);

module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545,
            network_id: "*"
        },
        rinkeby: {
            provider: () => provider,
            network_id: 4,
            gas: 4500000,
            gasPrice: 10000000000
        }
    },
    compilers: {
        solc: {
            version: "0.8.0" // Use the latest version of Solidity
        }
    }
};
