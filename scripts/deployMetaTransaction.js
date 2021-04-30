// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const MetaTransaction = await hre.ethers.getContractFactory(
    "MetaTransaction"
  );

  console.log("Waiting for deploying...");

  const metaTransaction = await MetaTransaction.deploy();
  await metaTransaction.deployed();

  // owner tranfer 100 tokens to addr1 and addr2 respectively

  const addr1Address = "0x70997970c51812dc3a010c7d01b50e0d17dc79c8";
  const addr2Address = "0x3c44cdddb6a900fa2b585dd299e03d12fa4293bc";

  await metaTransaction.transfer(addr1Address, 100);
  await metaTransaction.transfer(addr2Address, 100);

  console.log("Contract address: ", metaTransaction.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
