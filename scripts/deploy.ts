import { ethers, network } from 'hardhat';
import { Factory } from '../typechain-types';

const gasOverride = network.name === 'mandala' ? {
  gasPrice: '0x33a70303ea',
  gasLimit: '0x329b140',
} : {};

const deployAndDestoryContract = async (_salt: string, arg: string, factory: Factory) => {
  const saltArg = ethers.utils.formatBytes32String(_salt);

  const predictedAddr = await factory.callStatic.deployHelloWorld(saltArg, arg, gasOverride);
  console.log('predicted:', { arg, salt: _salt, predictedAddr });

  const tx = await factory.deployHelloWorld(saltArg, arg, gasOverride);
  const receipt = await tx.wait();

  const [, addr, salt, data] = receipt.logs[0].topics;
  console.log('actual: ', { salt, addr, data });

  const HelloWorld = await ethers.getContractFactory('HelloWorld');
  const instance = HelloWorld.attach(predictedAddr);
  const prevCode = await ethers.provider.getCode(predictedAddr);
  await (await instance.destroy()).wait();
  const afterCode = await ethers.provider.getCode(predictedAddr);

  console.log({
    'contract destroyed': predictedAddr,
    prevCode: prevCode.length,
    afterCode: afterCode.length,
  });
  console.log('');
};

async function main() {
  const Factory = await ethers.getContractFactory('Factory');

  const factory = await Factory.deploy(gasOverride);
  await factory.deployed();

  console.log({ factory: factory.address });

  for (const _salt of ['s1','s2']) {
    for (const arg of ['d1', 'd2']) {
      await deployAndDestoryContract(_salt, arg, factory);

      console.log('=============================== SECOND RUN ===============================');
      await deployAndDestoryContract(_salt, arg, factory);

      console.log('---------------------------------------------------------------------------');
    }
  }
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
