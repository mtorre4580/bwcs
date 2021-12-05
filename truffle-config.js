module.exports = {
  // current networks
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*",
      gas: 5000000,
    },
  },
  // configuration mocha
  mocha: {},
  // current version to compile contracts
  compilers: {
    solc: {
      version: "0.8.10",
    },
  },
};
