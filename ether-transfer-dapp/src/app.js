const Web3 = require('web3');
const contractABI = [/* ABI will go here */];
const contractAddress = 'YOUR_CONTRACT_ADDRESS'; // Replace with your deployed contract address

const web3 = new Web3(Web3.givenProvider || "http://localhost:7545");
const etherTransferContract = new web3.eth.Contract(contractABI, contractAddress);

document.getElementById('transferForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const recipient = document.getElementById('recipient').value;
    const amount = web3.utils.toWei(document.getElementById('amount').value, 'ether');

    const accounts = await web3.eth.getAccounts();
    
    etherTransferContract.methods.sendEther(recipient).send({ from: accounts[0], value: amount })
    .on('transactionHash', (hash) => {
        document.getElementById('status').innerText = `Transaction sent: ${hash}`;
    })
    .on('confirmation', (confirmationNumber, receipt) => {
        document.getElementById('status').innerText = `Transaction confirmed: ${receipt.transactionHash}`;
    })
    .on('error', (error) => {
        document.getElementById('status').innerText = `Error: ${error.message}`;
    });
});
