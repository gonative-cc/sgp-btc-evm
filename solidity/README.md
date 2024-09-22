# Smart contract APIs 

### DNFT 
- https://sepolia.lineascan.build/address/0x7FDcc4e857dd9D38563A1313adCFe0A145fC975D
- ERC721 smart contract. Each token respective for BTC account. 

### DMarketPlace 
- https://sepolia.lineascan.build/address/0x087f24d6FdCc3051FBcE89D35B4552C0e6F9c890
Simple Market place for DNFT support: 
- sellDNFT(uint256 tokenId, uint256 price) : Sell `tokeId`-th DNFT with `price` in ETH. 
- takeDNFT(uint256 tokenId): Take `tokenId` and pay to seller for sure. 
- getIteams(): Get all nft in market place. We should use the Graph for this API.  