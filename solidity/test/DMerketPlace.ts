import {
  time,
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import hre from "hardhat";

describe("Lock", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deployOneYearLockFixture() {
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await hre.ethers.getSigners();

    const DNFT = await hre.ethers.getContractFactory("DNFT");

    const dft = (await DNFT.deploy(owner)).connect(owner);

    const DMarketPlace = await hre.ethers.getContractFactory("DMarketPlace");
    const dMarketPlace = await DMarketPlace.deploy(dft.getAddress());
    await dft.safeMint(owner, 0);
    await dft.approve(dMarketPlace, 0);
    return { owner, otherAccount, dft, dMarketPlace };
  }

  describe("Sell", function () {
    it("Sell dnft", async function () {
      const { dft, dMarketPlace, otherAccount, owner } = await loadFixture(deployOneYearLockFixture);
      console.log(await dft.ownerOf(0));
      await dMarketPlace.sellDNFT(0, 10000);

      let items = await dMarketPlace.getIteams();
      console.log(items);


      console.log(await hre.ethers.provider.getBalance(owner.getAddress()));
      console.log(await hre.ethers.provider.getBalance(otherAccount.getAddress()));

      let dMarketPlaceFromOther = dMarketPlace.connect(otherAccount);

      await dMarketPlaceFromOther.takeDNFT(0, { value: 10000000 });

      console.log(await hre.ethers.provider.getBalance(owner.getAddress()));
      console.log(await hre.ethers.provider.getBalance(otherAccount.getAddress()));

      
      console.log(await dft.ownerOf(0));
      console.log(otherAccount.getAddress());
    });

   
  });
});
