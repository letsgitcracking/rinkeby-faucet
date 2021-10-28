const main = async () => {
	const faucetContractFactory = await hre.ethers.getContractFactory('Faucet');
	const faucetContract = await faucetContractFactory.deploy();
	await faucetContract.deployed();
	console.log("Contract deployed to:", faucetContract.address);
};

const runMain = async () => {
	try {
		await main();
		process.exit(0);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
};

runMain();