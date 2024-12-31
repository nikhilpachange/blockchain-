# Simple Voting DApp

This project is a simple voting decentralized application (DApp) that allows users to vote for their favorite candidate.

## Project Structure

simple-voting-dapp/ ├── contracts/ │ └── Voting.sol ├── src/ │ ├── index.html │ └── app.js ├── truffle-config.js └── README.md


## Getting Started

### Prerequisites

- Node.js and npm installed
- Truffle installed globally: `npm install -g truffle`
- Ganache for local blockchain development

### Installation

1. Clone this repository:
   ```bash
   git clone <your-repo-url>
   cd simple-voting-dapp

2. Install dependencies:npm install

3. Compile the smart contracts: truffle compile

4. Migrate the contracts to the blockchain: truffle migrate --network development

Running the DApp
Open index.html in your browser.

Ensure you have the MetaMask extension installed and connected to the same network as Ganache.

Interact with the DApp by voting for candidates.

License
This project is licensed under the MIT License - see the LICENSE file for details.


### 9. Deploy and Run the Project

1. **Start Ganache**: Open Ganache to run a local blockchain.

2. **Compile and Migrate**: In the terminal, run:

   ```bash
   truffle compile
   truffle migrate --network development

3. Serve the HTML File: Open index.html in a web browser (you may need a simple HTTP server). You can use the Live Server extension in Visual Studio Code or a similar tool.
