pragma solidity ^0.8.0;

contract HelloWorld{
    string public data;

    constructor(string memory _data) {
        data = _data;
    }
}