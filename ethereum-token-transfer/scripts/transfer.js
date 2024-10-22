const Web3 = require('web3');

// Connect to an Ethereum node using Infura or a local Ethereum node
const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID'));

// Example function to transfer tokens
async function transferTokens() {
    try {
        const accounts = await web3.eth.getAccounts();
        console.log('Sending from account:', accounts[0]);

        // Example token transfer (if using ERC20, you would interact with the token's smart contract)
        const receipt = await web3.eth.sendTransaction({
            from: accounts[0],
            to: '0xRecipientAddress...',  // Replace with the actual recipient address
            value: web3.utils.toWei('1', 'ether')  // Sending 1 Ether
        });

        console.log('Transaction successful!');
        console.log('Transaction Hash:', receipt.transactionHash);
        console.log('Gas used:', receipt.gasUsed);
    } catch (error) {
        console.error('Error while sending transaction:', error);
    }
}

transferTokens();
