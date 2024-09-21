# Smart contract APIs 

### DNFT 
- ERC721 smart contract. Each token respective for BTC account. 

### DMarketPlace 
Simple Market place for DNFT support: 
- sellDNFT(uint256 tokenId, uint256 price) : Sell `tokeId`-th DNFT with `price` in ETH. 
- takeDNFT(uint256 tokenId): Take `tokenId` and pay to seller for sure. 
- getIteams(): Get all nft in market place. We should use the Graph for this API.  