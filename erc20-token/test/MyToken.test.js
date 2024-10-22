const MyToken = artifacts.require("MyToken");

contract("MyToken", accounts => {
    it("should put 1000000 MTK in the first account", async () => {
        const instance = await MyToken.deployed();
        const balance = await instance.balanceOf(accounts[0]);
        assert.equal(balance.toString(), '1000000', "1000000 wasn't in the first account");
    });
});
