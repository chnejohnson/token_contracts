import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "@openzeppelin/hardhat-upgrades";

// import { ethers } from "hardhat";

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async (args, hre) => {
  const accounts = await hre.ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

const RINKEBY_URL =
  "https://rinkeby.infura.io/v3/ff6a249a74e048f1b413cba715f98d07";

// metamask account: flutter_dev
const RRINKEBY_PRIVATE_KEY =
  "1b46393a24fd63bd76dd315936f69cf5318c45d5e3f2162a1c244da6f71dd0c7";

const config: HardhatUserConfig = {
  solidity: "0.7.0",
  networks: {
    rinkeby: {
      url: RINKEBY_URL,
      accounts: [RRINKEBY_PRIVATE_KEY],
    },
  },
};

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
export default config;
