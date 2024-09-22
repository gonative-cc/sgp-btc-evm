// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import "./dNFT.sol";

// mock bridge
contract Bridge {
    DNFT dnft;

    constructor() {
        dnft = new DNFT(address(this));
    }

    // copy to stackoverflow
    function bytesToAddress(
        bytes memory bys
    ) private pure returns (address addr) {
        assembly {
            addr := mload(add(bys, 20))
        }
    }
    
    function process(
        bytes calldata metadata,
        bytes calldata message
    ) external payable {
        require(bytesToAddress(metadata) == address(dnft));

        uint256 tokenId = dnft.totalSupply();
        address receiver = abi.decode(message, (address));
        dnft.safeMint(receiver, tokenId);
    }

    function handle(
        uint32 _origin,
        bytes32 _sender,
        bytes calldata message
    ) external payable {
        require(bytesToAddress(metadata) == address(dnft));

        uint256 tokenId = dnft.totalSupply();
        address receiver = abi.decode(message, (address));

        dnft.safeMint(receiver, tokenId);
    }

    function withdraw() public {}
}
