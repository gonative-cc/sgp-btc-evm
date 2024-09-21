import hre from "hardhat";
import DNFTModule from "../ignition/modules/DNFT";
import DMarketPlaceModule from "../ignition/modules/Market";

async function main() {
  const { dnft } = await hre.ignition.deploy(DNFTModule);

  let dnftAddress = await dnft.getAddress();

  console.log(dnftAddress);
  
  const { market } = await hre.ignition.deploy(DMarketPlaceModule, {
    parameters: { DMarketPlaceModule:  {dnft: dnftAddress} },
  });

  console.log(`Market deployed to: ${market.target}`);
}

main().catch(console.error);