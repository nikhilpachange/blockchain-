const MyToken = artifacts.require("MyToken");

module.exports = function (deployer) {
    deployer.deploy(MyToken, 1000000); // Initial supply of 1,000,000 tokens
};
