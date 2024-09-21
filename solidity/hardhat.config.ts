import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

import 'dotenv/config';
// import "hardhat-gas-reporter";

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    // sepolia: {
    //   url: `https://eth-sepolia.g.alchemy.com/v2/${process.env.ALCHEMY_API_KEY}`,
    //   accounts: [`${process.env.SEPOLIA_PRIVATE_KEY}`],
    //   gasPrice: 100000000,
    //   chainId: 11155111,
    // },
    local: {
      url: "http://127.0.0.1:8545"
    }
  },
};

export default config;
