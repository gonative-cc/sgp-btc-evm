// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";


const DMarketPlaceModule = buildModule("DMarketPlaceModule", (m) => {
  const dnft = m.getParameter("dnft");

  const market = m.contract("DMarketPlace", [dnft]);

  return { market };
});

export default DMarketPlaceModule;
