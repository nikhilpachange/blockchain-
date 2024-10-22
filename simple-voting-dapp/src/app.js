const Web3 = require('web3');

// Replace with your Ganache RPC URL
const web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));

// Replace with your contract address after migration
const contractAddress = 'YOUR_CONTRACT_ADDRESS';

// ABI from build/contracts/Voting.json
const abi = [ /* ABI GOES HERE */ ];

const votingContract = new web3.eth.Contract(abi, contractAddress);

async function vote(candidate) {
    const accounts = await web3.eth.getAccounts();
    await votingContract.methods.vote(candidate).send({ from: accounts[0] });
}

// Additional code to interact with the voting contract...
