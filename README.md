# Token Contracts

### Guild
- run `yarn` or `npm install` to install all dependencies.
- run `npx hardhat test` to test contract Greeter.sol.

### Hardhat Network
- API: http://localhost:8545
- document: https://hardhat.org/hardhat-network/

## Deploy
### localhost
1. `npx hardhat node`
2. `npx hardhat run --network localhost scripts/deploy.js`

### Rinkeby Testnet
- `npx hardhat run scripts/deploy.js --network rinkeby`

## Test
### 測試 Rinkeby 上的合約
1. 先將私鑰導入 metamask
2. 使用 [MyEtherWallet | MEW](https://www.myetherwallet.com/access-my-wallet) 連線 metamask
3. 到左側欄位 Contract 的地方，複製貼上 Greeter 的地址和 ABI（artifacts/contracts/Greeter.sol/Greeter.json）只需要複製 abi: [...] 的部分。
4. 在 MEW 網頁上即可與合約互動