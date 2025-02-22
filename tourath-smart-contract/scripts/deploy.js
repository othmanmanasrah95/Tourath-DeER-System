const hre = require("hardhat");

async function main() {
    const TourathAuth = await hre.ethers.getContractFactory("TourathAuth");
    const tourathAuth = await TourathAuth.deploy();
    await tourathAuth.deployed();
    
    console.log("Contract deployed to:", tourathAuth.address);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
