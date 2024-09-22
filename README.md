# SGP BTC: Trust Minimized Bitcoin Marketplace

Marketplace smart contract and UI for SGP-BTC EthGlobal Singapore 2024 project.

## Hackathon Demo

* [**Problem statement, User Journey and Presentation**](https://hackmd.io/@robert-zaremba/SyAVLk6aC)
* [ZK Rollup + the dispatcher bridge](https://github.com/gonative-cc/sgp-btc-chain)


<div id="top"></div>

<!-- Run in Your local environment -->

# Prerequisites

* [nodejs](https://nodejs.org/en/download/) for backend smart contract deploy
* [MetaMask](https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn) Chrome extension installed in your browser
* [Hardhat](https://hardhat.org/) for local smart contracts deployement and testing
* [nft.storage](https://nft.storage/) account for IPFS storage (free account).

## How to run in your Local environment

<dl>
    <dt>Step1: Clone GitHub Project on your PC</dt>

        <p>npm install</p>
        <p>npm run dev</p>
        <p>Open your Project in browser (http://localhost:3000/)</p>
   
</dl>

### Built With
* [Solidity](https://docs.soliditylang.org/)
* [Hardhat](https://hardhat.org/getting-started/)
* [Next.js](https://nextjs.org/)
* [ethers.js](https://docs.ethers.io/v5/)
* [RainbowKit](https://www.rainbowkit.com//)
* [TailwindCss](https://tailwindcss.com/)

#### User interface

The front end is built with Next JS it's framework of React, it allows users to mint new NFTS and they can find on the home page a complete roadmap for the entire NFT project, the app also give a simple admin dashboard for setting minting prices and managing the sales period.

The front-end is built using the following libraries:
<ul>
<li><b>Next.js:</b> fronted Framework of develope UI</li>
<li><b>Ethers.js:</b> used as interface between the UI and the deployed smart contract</li>
<li><b>RainbowKit:</b> Connecting a Wallet</li>
<li><b>Tailwind CSS:</b> Styles using TailwindCss</li>    
</ul>


