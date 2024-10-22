module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 7545, // Make sure to replace this with the port you're using
            network_id: "*" // Match any network id
        }
    },
    compilers: {
        solc: {
            version: "0.8.0"
        }
    }
};
