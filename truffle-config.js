const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "e113e5c877bc4c74a1088a4ef821f442";
//
const fs = require('fs');
const mnemonic = "fire embrace hand physical segment evolve similar exact panel dilemma remind reject"
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,
      gas: 4500000,
      gasPrice: 10000000000,
      from: "0xD7ca98589473aB6651f50A8EC65986d7fb14089a"
    }
  }  
};