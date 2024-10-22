# Ether Transfer DApp

This project implements a simple Decentralized Application (DApp) for transferring Ether between addresses using Solidity and JavaScript.

## Project Structure

```bash
ether-transfer-dapp/
├── contracts/
│   └── EtherTransfer.sol    # Smart contract for transferring Ether
├── src/
│   ├── index.html           # HTML file for the frontend
│   └── app.js               # JavaScript file for frontend logic
├── truffle-config.js        # Truffle configuration file
├── package.json             # Project dependencies and scripts
└── README.md                # Project documentation

Requirements
Node.js (v12 or above)
Truffle
Ganache (for a local Ethereum blockchain)
Installation Steps


1}Clone the Repository:git clone https://github.com/yourusername/ether-transfer-dapp.git
cd ether-transfer-dapp

2}Install Dependencies:npm install
npm install @truffle/hdwallet-provider


3}Compile the Contract:npx truffle compile


4}Migrate the Contract:npx truffle migrate --network development


5}Open the DApp:npm install -g http-server
http-server src

License
This project is open-source and available under the MIT License.

