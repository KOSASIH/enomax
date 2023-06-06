# Enomax
Smart Decentralized application powered by crypto future high technology

### 1. Install MetaMask

When we deploy a smart contract to a blockchain or interact with the deployed smart contract, we need to pay the gas fee, and for that, we need to have a Web3 wallet, MetaMask.
So, let's install the MetaMask wallet.
Please click [here](https://metamask.io/) to install the MetaMask wallet; meanwhile, we need to switch the network to Goerli and get test tokens on Goerli.
Click on the MetaMask wallet plugin, log in to the MetaMask wallet, open the testnet in the settings, and switch to Goerli.

![change to goerli](https://3869740696-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/spaces%2F-MZ6_j0WUFnBhwIdP3LR%2Fuploads%2F7r8aUlo6Ipety4BPEpyS%2Fimage.png?alt=media&token=6b6a1674-06c3-4309-8e93-3fe453b24e9a)

Please use any of the below-mentioned Goerli faucets to receive tokens for Goeri test network. 

1. [Goerli faucet by alchemy](https://goerlifaucet.com/?utm_source=buildspace.so&utm_medium=buildspace_project)
2. [Goerli faucet by ChainLink](https://faucets.chain.link/goerli?utm_source=buildspace.so&utm_medium=buildspace_project) 

Amount limt: 0.1 ETH / 24 Hours

Finally, make sure your network is switched to Goerli and has at least 0.1 GoerliETH.

![](https://d3gvnlbntpm4ho.cloudfront.net/ERC721+deployment+on+Goerli+Etherum/goerli721.assets/metamask_goerli.png)

### 2. Completing hardhat.config.js

First of all, you need to change the hardhat.config.js file, you can find it in the root directory of your smart contract project.
Replace YOUR *GOERLI* API URL with GOERLI RPC (available via [Infura](https://infura.io/), [Alchemy](https://www.alchemy.com/), or directly from MetaMask).
Replace YOUR *PRIVATE* GOERLI *ACCOUNT* KEY with your account private key.

```
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
     goerli: {
      url: "YOUR_GOERLI_API_URL",
      accounts: ["YOUR_PRIVATE_GOERLI_ACCOUNT_KEY"],
    },
  },
};
```

![image-20221111141756985](https://d3gvnlbntpm4ho.cloudfront.net/Hardhat_Dapp_Wave_on_Goerli_Etherum/image-20221111141756985.png)

***Don't share your private key with anyone, otherwise you may lose all of your cryptos***.

### 3. Let's get it running!

Open npm-hardhat in terminal

```
npm install
npx hardhat run scripts/run.js
```

You should see your console.log run from within the contract, and then you should also see the contract's address printed out. Here is what I got.

![image-20221111143427975](https://d3gvnlbntpm4ho.cloudfront.net/Hardhat_Dapp_Wave_on_Goerli_Etherum/image-20221111143427975.png)

Remember, when you run scripts/run.js, you are actually

1. Creating a new local Ethereum network.

2. Deploying your contract.

3. Then, when the script ends, Hardhat will automatically destroy that local network. We need a way to keep the local network alive. why? Well, think of a local server. You want to keep it alive so you can continue talking to it, for example, if you have a local server with an API that you make on it, you want to keep this local server alive so you can use it on your website work and test it out. We're going to do the same thing here. Go to your terminal and create a new window. In this window, CD back to your project. Then, go ahead and run here.

   ```
   npx hardhat node
   ```

You create a local Ethereum network. And, as you can see, Hardhat gave us 20 accounts to work on and gave them all 10,000 ETH, and we are now rich! Wow! Best project ever. So now, it's just an empty blockchain. There are no blocks.

We don't need this local blockchain network now, exit first

```
ctrl + c
```

### 4. Deploy to the Goerli test network

```
npx hardhat run scripts/deploy.js --network goerli
```

Here is my output:

```
Deploying contracts with the account: 0xF79A3bb8d5b93686c4068E2A97eAeC5fE4843E7D
Account balance: 3198297774605223721
WavePortal address: 0xd5f08a0ae197482FA808cE84E00E97d940dBD26E
```

Copy the address of the deployed contract in the last line and save it somewhere. Don't lose it! You'll need it for the foreground later :). Yours will be different from mine.

### 5. Go to the front-end directory

You need to get this permission in your React app. It's as simple as creating a new property in your App.js file called contractAddress and setting its value to the WavePortal address printed out in the console.

```
cd app
npm install
```

Open /app/src/App.js file and copy your WavePortal address and replace contractAddress:

```
import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import "./App.css";

const App = () => {
  const [currentAccount, setCurrentAccount] = useState("");
  /**
   * Create a variable here that holds the contract address after you deploy!
   */
  const contractAddress = "0xd5f08a0ae197482FA808cE84E00E97d940dBD26E"; // there
```

Then copy /artifacts/contracts/WavePortal.sol/WavePortal.json file to replace /app/src/utils/WavePortal.json file

Running front-end pages

```
npm run start
```

### 6. Port forwarding using ChainIDE

For port mapping, click the port, select npm-hardhat for image, port 3000, and click Add:

![image-20221111144455408](https://d3gvnlbntpm4ho.cloudfront.net/Hardhat_Dapp_Wave_on_Goerli_Etherum/image-20221111144455408.png)

Click the button below to open the page

![image-20221111144613105](https://d3gvnlbntpm4ho.cloudfront.net/Hardhat_Dapp_Wave_on_Goerli_Etherum/image-20221111144613105.png)

Switch MetaMask to Goerli Network, connect to the wallet, click wave, and that should go perfect!

![image-20221111144811987](https://d3gvnlbntpm4ho.cloudfront.net/Hardhat_Dapp_Wave_on_Goerli_Etherum/image-20221111144811987.png)
