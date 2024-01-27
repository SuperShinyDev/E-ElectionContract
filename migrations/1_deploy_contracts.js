const Ballot = artifacts.require('Ballot');

module.exports = function(deployer) {
  deployer.deploy(Ballot, [web3.utils.asciiToHex('C.Ronaldo'), web3.utils.asciiToHex('L.Messi')], {from:"0xD32469939Bc9b813292F144672c2545235bAc4Af"});
};
