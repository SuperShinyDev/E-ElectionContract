const Ballot = artifacts.require("Ballot");

contract('Ballot', (accounts) => {
  it('Give right to voters', async () => {
    const voteInstance = await Ballot.deployed();
    await voteInstance.giveRightToVote(accounts[1], {from: accounts[0]});
    await voteInstance.giveRightToVote(accounts[2], {from: accounts[0]});
    await voteInstance.giveRightToVote(accounts[3], {from: accounts[0]});
    await voteInstance.giveRightToVote(accounts[4], {from: accounts[0]});
    await voteInstance.giveRightToVote(accounts[5], {from: accounts[0]});
    await voteInstance.vote(1, {from:accounts[1]});
    await voteInstance.vote(0, {from:accounts[2]});
    await voteInstance.delegate(accounts[4], {from:accounts[3]});
    await voteInstance.delegate(accounts[5], {from:accounts[4]});
    await voteInstance.vote(1, {from:accounts[5]})
    

    const winningProposal = await voteInstance.winningProposal();
    const winnerName = await voteInstance.winnerName();
    console.log(web3.utils.hexToString(winnerName));
    assert.equal(winningProposal, 1, "Error");
  });
});
