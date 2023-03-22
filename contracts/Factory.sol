// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./HelloWorld.sol";

contract Factory {
    event Deployed(
        address indexed deployedAddress,
        bytes32 indexed salt,
        string indexed data
    );

    function deployHelloWorld(bytes32 salt, string memory data) public returns (address) {
        HelloWorld instance = new HelloWorld{salt: salt}(data);

        emit Deployed(address(instance), salt, data);
        return address(instance);
    }
}