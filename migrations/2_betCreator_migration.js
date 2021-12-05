const BetCreator = artifacts.require("BetCreator");

module.exports = function (deployer) {
  deployer.deploy(BetCreator);
};
