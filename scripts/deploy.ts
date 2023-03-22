import { ethers, network } from "hardhat";

const gasOverride = network.name === 'mandala' ? {
  gasPrice: '0x33a70303ea',
  gasLimit: '0x329b140',
} : {};

async function main() {
  const Factory = await ethers.getContractFactory('Factory');
  const factory = await Factory.deploy(gasOverride);
  await factory.deployed();

  console.log({ factory: factory.address })

  for (const _salt of ['s1','s2']) {
    for (const arg of ['d1', 'd2']) {
      const saltArg = ethers.utils.formatBytes32String(_salt);

      const predictedAddr = await factory.callStatic.deployHelloWorld(saltArg, arg, gasOverride);
      console.log({ arg, salt: _salt, predictedAddr })

      const tx = await factory.deployHelloWorld(saltArg, arg, gasOverride);
      const receipt = await tx.wait();

      const [_, addr, salt, data] = receipt.logs[0].topics;
      console.log('actual: ', { salt, addr, data })
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
