const web3 = require('@solana/web3.js');

const transferSol = async () => {
    // Connect to the Solana Devnet
    const connection = new web3.Connection(web3.clusterApiUrl('devnet'), 'confirmed');

    // Replace with your secret key
    const fromWallet = web3.Keypair.fromSecretKey(Uint8Array.from([/* your secret key array */]));
    
    // Replace with the recipient's public address
    const toPublicKey = new web3.PublicKey('/* recipient address */');
    
    // Amount to transfer (1 SOL)
    const amount = web3.LAMPORTS_PER_SOL; 

    // Create a transaction
    const transaction = new web3.Transaction().add(
        web3.SystemProgram.transfer({
            fromPubkey: fromWallet.publicKey,
            toPubkey: toPublicKey,
            lamports: amount,
        }),
    );

    // Send and confirm the transaction
    const signature = await web3.sendAndConfirmTransaction(connection, transaction, [fromWallet]);
    console.log('Transaction successful with signature:', signature);
};

transferSol().catch(console.error);
