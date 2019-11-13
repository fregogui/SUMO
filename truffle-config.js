const path = require("path");
const HDWalletProvider = require("truffle-hdwallet-provider");

const privateKeys = ['']; // private keys

module.exports = {
  contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" 
    },
    goerli: {
      provider: () =>
      new HDWalletProvider(privateKeys, "http://127.0.0.1:8545"),
      port: 8545,
      network_id: "5"
    },
    mainnet: {
      provider: () =>
      new HDWalletProvider(privateKeys, "http://my.ethchain.dnp.dappnode.eth:8545"),
      gas: 4400000,
      gasPrice: 22000000000,
      network_id: "1" 
    }
  }
};