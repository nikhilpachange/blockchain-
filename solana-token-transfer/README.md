# Solana Token Transfer

This project demonstrates how to transfer SOL tokens between two accounts on the Solana blockchain using the Solana Web3.js library.

## Requirements

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Solana CLI](https://docs.solana.com/cli/install-solana-cli-tools)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/solana-token-transfer.git
    cd solana-token-transfer
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure your Solana Wallet:
    - Create a new wallet:
      ```bash
      solana-keygen new
      ```
    - Replace the secret key in `transfer.js` with your wallet’s secret key.
    - Replace the recipient address with the public key of the recipient.

## Usage

1. To run the token transfer:
    ```bash
    node transfer.js
    ```

This will transfer 1 SOL from your wallet to the recipient address on the Solana Devnet.

## Explanation

- The project uses the Solana Web3.js library to connect to the Solana blockchain and initiate a token transfer.
- The `transfer.js` script builds and sends a transaction from one wallet to another.
- You can adjust the amount of SOL and the recipient's address in the script.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
