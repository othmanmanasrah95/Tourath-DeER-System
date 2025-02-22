const hre = require("hardhat");

async function main() {
    const TourathAuth = await hre.ethers.getContractFactory("TourathAuth"); // Load Contract Factory
    const contract = await TourathAuth.deploy(); // Deploy Contract

    await contract.waitForDeployment(); // Ensure Deployment Completes
    console.log("Contract deployed to:", await contract.getAddress());
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});