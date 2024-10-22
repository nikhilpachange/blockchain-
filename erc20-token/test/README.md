# Basic ERC20 Token Contract

This project implements a basic ERC20 token using Solidity and OpenZeppelin Contracts.

## Project Structure

```bash
erc20-token/
├── contracts/
│   └── MyToken.sol         # ERC20 token smart contract
├── migrations/
│   └── 1_initial_migration.js # Migration script
├── test/
│   └── MyToken.test.js      # Tests for the token contract
├── truffle-config.js        # Truffle configuration
└── package.json             # Project dependencies and scripts

Requirements
Node.js (v12 or above)
Truffle
Ganache (for a local Ethereum blockchain)
Installation Steps
1} Clone the Repository:git clone https://github.com/yourusername/erc20-token.git
cd erc20-token

2}Install Dependencies: npm install
npm install @openzeppelin/contracts

3} Compile the Contract: npx truffle compile

4} Migrate the Contract:npx truffle migrate --network development

5}Test the Contract:npx truffle test

License
This project is open-source and available under the MIT License.
License
This project is open-source and available under the MIT License.

3}Add Files and Commit: Add all files and commit them:git add .
git commit -m "Initial commit"

4}Push to GitHub: Push your local repository to GitHub:git push -u origin master
