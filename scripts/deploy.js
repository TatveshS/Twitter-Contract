// const main = async() => {
//     const contractFactory = await ethers.getContractFactory('TwitterContract');
//     const contract = await contractFactory.deploy();
//     await contract.deployed();
  
//     console.log("Contract deployed to: ", contract.address);
//   }
  
//   const runMain = async() => {
//     try {
//       await main();
//       process.exit(0);
//     } catch(error) {
//       console.log(error);
//       process.exit(1);
//     }
//   }
  
//   runMain();

const hre = require("hardhat");

async function main() {
  // Hardhat always runs the compile task when running scripts with its command
  // line interface.
  //
  // If this script is run directly using `node` you may want to call compile
  // manually to make sure everything is compiled
  // await hre.run('compile');

  // We get the contract to deploy
  const Twitter = await hre.ethers.getContractFactory("TwitterContract");
  const twitter = await Twitter.deploy();

  await twitter.deployed();

  console.log("Contract deployed to:", twitter.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });