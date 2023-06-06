require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.0",
  networks: {
     goerli: {
      url: "https://rpc.ankr.com/eth_goerli",
      accounts: ["YOUR_PRIVATE_GOERLI_ACCOUNT_KEY"],
    },
    bsctestnet: {
      url: "https://bsc-testnet.public.blastapi.io",
      accounts: ["YOUR_PRIVATE_GOERLI_ACCOUNT_KEY"],
    },
    mumbai: {
      url: "https://matic-mumbai.chainstacklabs.com",
      accounts: ["YOUR_PRIVATE_GOERLI_ACCOUNT_KEY"],
    },
  },
};
