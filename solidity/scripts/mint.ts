import hre from "hardhat";
import DNFTModule from "../ignition/modules/DNFT";

async function main() {
  const { dnft } = await hre.ignition.deploy(DNFTModule);
  const [owner, ] = await hre.ethers.getSigners();

  const dnftContract = await hre.ethers.getContractAt("DNFT", await dnft.getAddress());
  let total = await dnftContract.totalSupply();

  await dnftContract.safeMint(owner.address, total);

  console.log(total);
}

main().catch(console.error);