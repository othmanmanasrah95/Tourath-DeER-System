// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract TourathAuth {
    mapping(address => bool) public registeredUsers;
    event UserRegistered(address indexed user);

    function register() public {
        require(!registeredUsers[msg.sender], "User already registered");
        registeredUsers[msg.sender] = true;
        emit UserRegistered(msg.sender);
    }

    function isRegistered(address user) public view returns (bool) {
        return registeredUsers[user];
    }
}
