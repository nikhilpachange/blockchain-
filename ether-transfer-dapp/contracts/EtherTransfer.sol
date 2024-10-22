// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract EtherTransfer {
    event Transfer(address indexed from, address indexed to, uint amount);

    function sendEther(address payable recipient) public payable {
        require(msg.value > 0, "You need to send some Ether");
        recipient.transfer(msg.value);
        emit Transfer(msg.sender, recipient, msg.value);
    }
}
