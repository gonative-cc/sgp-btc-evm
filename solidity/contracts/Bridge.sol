// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "./dNFT.sol";

// mock bridge
contract Bridge {
    DNFT dnft; 

    constructor() {
        dnft = new DNFT(address(this));        
    }

    function deposit() public {
        
    }

    function withdraw() public {

    }
}