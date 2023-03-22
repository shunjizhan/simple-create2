# Create2 Example
## prepare
```
yarn
yarn build
```

## run script on hardhat network (ok)
it works fine, and create2 should be able to create same contract on the same address after the previous contract was destroyed.

```
yarn deploy

### result
{ factory: '0x5FbDB2315678afecb367f032d93F642f64180aa3' }
predicted: {
  arg: 'd1',
  salt: 's1',
  predictedAddr: '0xcb489c023632b6c2d43b54Da1aB3ebe2D42825C6'
}
actual:  {
  salt: '0x7331000000000000000000000000000000000000000000000000000000000000',
  addr: '0x000000000000000000000000cb489c023632b6c2d43b54da1ab3ebe2d42825c6',
  data: '0x895d01736261f10d47623e8b2e6baa88c35608bba8dad857b088c15c13aa8e1e'
}
{
  'contract destroyed': '0xcb489c023632b6c2d43b54Da1aB3ebe2D42825C6',
  prevCode: 1324,
  afterCode: 2
}

=============================== SECOND RUN ===============================
predicted: {
  arg: 'd1',
  salt: 's1',
  predictedAddr: '0xcb489c023632b6c2d43b54Da1aB3ebe2D42825C6'
}
actual:  {
  salt: '0x7331000000000000000000000000000000000000000000000000000000000000',
  addr: '0x000000000000000000000000cb489c023632b6c2d43b54da1ab3ebe2d42825c6',
  data: '0x895d01736261f10d47623e8b2e6baa88c35608bba8dad857b088c15c13aa8e1e'
}
{
  'contract destroyed': '0xcb489c023632b6c2d43b54Da1aB3ebe2D42825C6',
  prevCode: 1324,
  afterCode: 2
}

---------------------------------------------------------------------------
predicted: {
  arg: 'd2',
  salt: 's1',
  predictedAddr: '0x5938A4C9b304C8DdfB323B52F372a4c9dE00012C'
}
actual:  {
  salt: '0x7331000000000000000000000000000000000000000000000000000000000000',
  addr: '0x0000000000000000000000005938a4c9b304c8ddfb323b52f372a4c9de00012c',
  data: '0xbe8d816aabb0213706fd8d68e7853abb15ed15c33b0d548b2663387827e13b69'
}
{
  'contract destroyed': '0x5938A4C9b304C8DdfB323B52F372a4c9dE00012C',
  prevCode: 1324,
  afterCode: 2
}

=============================== SECOND RUN ===============================
predicted: {
  arg: 'd2',
  salt: 's1',
  predictedAddr: '0x5938A4C9b304C8DdfB323B52F372a4c9dE00012C'
}
actual:  {
  salt: '0x7331000000000000000000000000000000000000000000000000000000000000',
  addr: '0x0000000000000000000000005938a4c9b304c8ddfb323b52f372a4c9de00012c',
  data: '0xbe8d816aabb0213706fd8d68e7853abb15ed15c33b0d548b2663387827e13b69'
}
{
  'contract destroyed': '0x5938A4C9b304C8DdfB323B52F372a4c9dE00012C',
  prevCode: 1324,
  afterCode: 2
}

---------------------------------------------------------------------------
predicted: {
  arg: 'd1',
  salt: 's2',
  predictedAddr: '0xEaC39D65720D6172D4a3264ddb6cC64CA995f2C6'
}
actual:  {
  salt: '0x7332000000000000000000000000000000000000000000000000000000000000',
  addr: '0x000000000000000000000000eac39d65720d6172d4a3264ddb6cc64ca995f2c6',
  data: '0x895d01736261f10d47623e8b2e6baa88c35608bba8dad857b088c15c13aa8e1e'
}
{
  'contract destroyed': '0xEaC39D65720D6172D4a3264ddb6cC64CA995f2C6',
  prevCode: 1324,
  afterCode: 2
}

=============================== SECOND RUN ===============================
predicted: {
  arg: 'd1',
  salt: 's2',
  predictedAddr: '0xEaC39D65720D6172D4a3264ddb6cC64CA995f2C6'
}
actual:  {
  salt: '0x7332000000000000000000000000000000000000000000000000000000000000',
  addr: '0x000000000000000000000000eac39d65720d6172d4a3264ddb6cc64ca995f2c6',
  data: '0x895d01736261f10d47623e8b2e6baa88c35608bba8dad857b088c15c13aa8e1e'
}
{
  'contract destroyed': '0xEaC39D65720D6172D4a3264ddb6cC64CA995f2C6',
  prevCode: 1324,
  afterCode: 2
}

---------------------------------------------------------------------------
predicted: {
  arg: 'd2',
  salt: 's2',
  predictedAddr: '0xF6d482054c67DE8D6a5f3cda9085Ce6F7aa0e811'
}
actual:  {
  salt: '0x7332000000000000000000000000000000000000000000000000000000000000',
  addr: '0x000000000000000000000000f6d482054c67de8d6a5f3cda9085ce6f7aa0e811',
  data: '0xbe8d816aabb0213706fd8d68e7853abb15ed15c33b0d548b2663387827e13b69'
}
{
  'contract destroyed': '0xF6d482054c67DE8D6a5f3cda9085Ce6F7aa0e811',
  prevCode: 1324,
  afterCode: 2
}

=============================== SECOND RUN ===============================
predicted: {
  arg: 'd2',
  salt: 's2',
  predictedAddr: '0xF6d482054c67DE8D6a5f3cda9085Ce6F7aa0e811'
}
actual:  {
  salt: '0x7332000000000000000000000000000000000000000000000000000000000000',
  addr: '0x000000000000000000000000f6d482054c67de8d6a5f3cda9085ce6f7aa0e811',
  data: '0xbe8d816aabb0213706fd8d68e7853abb15ed15c33b0d548b2663387827e13b69'
}
{
  'contract destroyed': '0xF6d482054c67DE8D6a5f3cda9085Ce6F7aa0e811',
  prevCode: 1324,
  afterCode: 2
}

---------------------------------------------------------------------------
```

## run script on local mandala network (error)
after destroying previous contract, create2 failed to create contract on the same address.

```
yarn deploy --network mandala

### result
{ factory: '0x217b896620AfF6518B9862160606695607A63442' }
predicted: {
  arg: 'd1',
  salt: 's1',
  predictedAddr: '0xf518f589C1Cd230aCDc85539923d34826CD4461a'
}
actual:  {
  salt: '0x7331000000000000000000000000000000000000000000000000000000000000',
  addr: '0x000000000000000000000000f518f589c1cd230acdc85539923d34826cd4461a',
  data: '0x895d01736261f10d47623e8b2e6baa88c35608bba8dad857b088c15c13aa8e1e'
}
{
  'contract destroyed': '0xf518f589C1Cd230aCDc85539923d34826CD4461a',
  prevCode: 1324,
  afterCode: 2
}

=============================== SECOND RUN ===============================
Error: missing revert data in call exception; Transaction reverted without a reason string [ See: https://links.ethers.org/v5-errors-CALL_EXCEPTION ] (data="0x", transaction={"from":"0x75E480dB528101a381Ce68544611C169Ad7EB342","gasLimit":{"type":"BigNumber","hex":"0x0329b140"},"gasPrice":{"type":"BigNumber","hex":"0x33a70303ea"},"to":"0x217b896620AfF6518B9862160606695607A63442","data":"0x40725b277331000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000026431000000000000000000000000000000000000000000000000000000000000","accessList":null}, error={"name":"ProviderError","_stack":"ProviderError: internal JSON-RPC error [VM Exception while processing transaction: execution revert:  0x]. More info: https://evmdocs.acala.network/reference/common-errors\n    at HttpProvider.request (/Users/shunjizhan/Acala/simple-create2/node_modules/hardhat/src/internal/core/providers/http.ts:88:21)\n    at processTicksAndRejections (node:internal/process/task_queues:96:5)\n    at async EthersProviderWrapper.send (/Users/shunjizhan/Acala/simple-create2/node_modules/@nomiclabs/hardhat-ethers/src/internal/ethers-provider-wrapper.ts:13:20)","code":-32603,"_isProviderError":true}, code=CALL_EXCEPTION, version=providers/5.7.2)
    at Logger.makeError (/Users/shunjizhan/Acala/simple-create2/node_modules/@ethersproject/logger/src.ts/index.ts:269:28)
    at Logger.throwError (/Users/shunjizhan/Acala/simple-create2/node_modules/@ethersproject/logger/src.ts/index.ts:281:20)
    at checkError (/Users/shunjizhan/Acala/simple-create2/node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts:66:16)
    at EthersProviderWrapper.<anonymous> (/Users/shunjizhan/Acala/simple-create2/node_modules/@ethersproject/providers/src.ts/json-rpc-provider.ts:642:20)
    at step (/Users/shunjizhan/Acala/simple-create2/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:48:23)
    at Object.throw (/Users/shunjizhan/Acala/simple-create2/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:29:53)
    at rejected (/Users/shunjizhan/Acala/simple-create2/node_modules/@ethersproject/providers/lib/json-rpc-provider.js:21:65)
    at processTicksAndRejections (node:internal/process/task_queues:96:5) {
  reason: 'missing revert data in call exception; Transaction reverted without a reason string',
  code: 'CALL_EXCEPTION',
  data: '0x',
  transaction: {
    from: '0x75E480dB528101a381Ce68544611C169Ad7EB342',
    gasLimit: BigNumber { value: "53064000" },
    gasPrice: BigNumber { value: "221845324778" },
    to: '0x217b896620AfF6518B9862160606695607A63442',
    data: '0x40725b277331000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000004000000000000000000000000000000000000000000000000000000000000000026431000000000000000000000000000000000000000000000000000000000000',
    accessList: null
  },
  error: ProviderError: internal JSON-RPC error [VM Exception while processing transaction: execution revert:  0x]. More info: https://evmdocs.acala.network/reference/common-errors
      at HttpProvider.request (/Users/shunjizhan/Acala/simple-create2/node_modules/hardhat/src/internal/core/providers/http.ts:88:21)
      at processTicksAndRejections (node:internal/process/task_queues:96:5)
      at async EthersProviderWrapper.send (/Users/shunjizhan/Acala/simple-create2/node_modules/@nomiclabs/hardhat-ethers/src/internal/ethers-provider-wrapper.ts:13:20)
}
```
