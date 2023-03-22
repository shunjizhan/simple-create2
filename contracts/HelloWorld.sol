pragma solidity ^0.8.0;

contract HelloWorld{
    string public data;

    event Destroyed(address indexed addr);

    constructor(string memory _data) {
        data = _data;
    }

    function destroy() public {
        emit Destroyed(address(this));

        selfdestruct(payable(msg.sender));
    }
}