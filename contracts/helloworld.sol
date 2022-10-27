// SPDX-License-Identifier: MIT
// specifying the version of solidity, here we have version 0.8.17

pragma solidity ^0.8.17;

// contract is basicall collection of fucntions 
contract HelloWorld {

    // this will be emitted when update fucntion isn called
    event updatedMessages(string oldStr, string newStr);

    // declares the variable 'message' of type string
    string public message;
    constructor(string memory initMessage){
        message = initMessage;
    }
    function update(string memory newMessage) public {
        string memory oldMsg = message;
        message = newMessage;
        emit updatedMessages(oldMsg, newMessage);
    }
}
