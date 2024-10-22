# Ethereum Token Transfer Project

This project demonstrates how to transfer Ethereum tokens using the Web3.js library and a basic Node.js script.

## Project Structure

```bash
ethereum-token-transfer/
├── contracts/            # Smart contracts (optional if deploying ERC20 tokens)
├── migrations/           # Truffle migrations (for contract deployment)
├── scripts/
│   └── transfer.js       # Script for transferring tokens
├── test/                 # Contract testing (if applicable)
├── truffle-config.js     # Truffle configuration
└── package.json          # Project dependencies and scripts


Requirements
Node.js (v12 or above)
Truffle (for initializing and managing Ethereum projects)
Infura or a local Ethereum node for connecting to the Ethereum network.
Ethereum Testnet (e.g., Rinkeby) or Mainnet account with sufficient funds.
Installation Steps

1} Clone the Repository:
git clone https://github.com/yourusername/ethereum-token-transfer.git
cd ethereum-token-transfer

2}Install Dependencies:
npm install

3}Configure Infura:Update the transfer.js file with your own Infura project ID in the Web3.providers.HttpProvider section:const web3 = new Web3(new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/YOUR_INFURA_PROJECT_ID'));

4}Ensure Accounts Have Testnet ETH:
Make sure your Ethereum account has enough funds on the Rinkeby test network. You can get test ETH from a Rinkeby faucet.

How to Run the Script
Run the script to transfer tokens or Ether:node scripts/transfer.js

The output will display details about the transaction, including the transaction hash and gas used.

Example Output
Transaction successful!
Transaction Hash: 0xabc123456789...
Gas used: 21000
Recipient address: 0xRecipientAddress...
Amount transferred: 1 Ether


License : This project is open-source and available under the MIT License.

