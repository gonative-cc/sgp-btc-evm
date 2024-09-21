// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.27;


import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import "@openzeppelin/contracts/utils/structs/EnumerableMap.sol";

contract DMarketPlace {
    using EnumerableMap for EnumerableMap.UintToUintMap;

    EnumerableMap.UintToUintMap idMap;

    address dNFTAddress;
    uint256 public totalItem;

    struct NFTStatus {
        address seller;
        uint256 price; 
        uint256 tokenId;
    }

    mapping(uint256 => NFTStatus) public statusMap;

    event Sell(address seller ,  NFTStatus status);
    event Taken(address taker,  NFTStatus status);

    constructor(address _dnftAddress) {
        totalItem = 0;
        dNFTAddress = _dnftAddress;
    }

    function sellDNFT(uint256 tokenId, uint256 price) public {
        require(IERC721(dNFTAddress).ownerOf(tokenId) == msg.sender);
        require(!idMap.contains(tokenId));

        NFTStatus memory nftStatus = NFTStatus({
            seller: msg.sender,
            price: price, 
            tokenId: tokenId
        });

        totalItem = totalItem + 1;
        statusMap[totalItem] = nftStatus;
        idMap.set(tokenId, totalItem);

        IERC721(dNFTAddress).transferFrom(msg.sender, address(this), tokenId); 
        emit Sell(msg.sender, nftStatus);
    }
    
    function takeDNFT(uint256 tokenId) public payable{
        require(idMap.contains(tokenId));
        NFTStatus memory nftStatus = statusMap[idMap.get(tokenId)];

        uint256 value = msg.value;
        require(value >= nftStatus.price);

        idMap.remove(tokenId);

        address payable seller = payable(nftStatus.seller);

        seller.transfer(msg.value);

        IERC721(dNFTAddress).transferFrom(address(this), msg.sender, tokenId);
        emit Taken(msg.sender, nftStatus);
    }

    function getIteams() public view returns(NFTStatus[] memory) {
        NFTStatus[] memory iteam = new NFTStatus[](idMap.length());
        uint256[] memory keys = idMap.keys();
        for (uint256 i = 0; i < keys.length; i = i+1) {
            uint256 tokenId = idMap.get(keys[i]);
            iteam[i] = statusMap[tokenId];
        }
        return iteam;
    }

    receive() external payable {}   
}