// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

// factory to create multiple beats and deploy
contract BetCreator {
    Bet[] public deployedBets;

    function newBet(string memory _teamA, string memory _teamB) public {
        Bet betContract = new Bet(_teamA, _teamB, msg.sender);
        deployedBets.push(betContract);
    }

    function getDeployedBets() public view returns (Bet[] memory) {
        return deployedBets;
    }
}

contract Bet {
    address public creator;
    string public teamA;
    string public teamB;
    Gamble[] private gamblers;

    mapping(address => bool) private glambersPlaying;

    struct Gamble {
        string result;
        address user;
    }

    // events to notify the web
    event GamblerJoined(address glamber, string result);
    event GamblerWinner(address glamber);

    constructor(
        string memory _teamA,
        string memory _teamB,
        address _creator
    ) {
        creator = _creator;
        require(
            !(isEmptyString(_teamA) && isEmptyString(_teamB)),
            "fields _teamA and _teamB are required"
        );
        teamA = _teamA;
        teamB = _teamB;
    }

    // recieve founds for external
    receive() external payable {}

    // retrieve the current balance in the contract
    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }

    // add the new user with the bet
    function gamble(string memory _result)
        public
        payable
        hasFounds
        isNotAlreadyBet
    {
        glambersPlaying[msg.sender] = true;
        gamblers.push(Gamble({result: _result, user: msg.sender}));
        emit GamblerJoined(msg.sender, _result);
    }

    // retrieve the winner if has any and reset all the gamblers
    function pickWinner(string memory winnerResult) public isCreator {
        address winner;
        for (uint256 i = 0; i < gamblers.length; i++) {
            if (compareStrings(winnerResult, gamblers[i].result)) {
                winner = gamblers[i].user;
            }
            delete glambersPlaying[gamblers[i].user];
        }
        if (!isEmptyAddress(winner)) {
            payable(winner).transfer(getBalance());
            emit GamblerWinner(winner);
        }
        delete gamblers;
    }

    function getGamblers() public view returns (Gamble[] memory) {
        return gamblers;
    }

    function getTotalGamblers() public view returns (uint256) {
        return gamblers.length;
    }

    function isEmptyString(string memory current) private pure returns (bool) {
        bytes memory tempString = bytes(current);
        return tempString.length == 0;
    }

    function isEmptyAddress(address current) private pure returns (bool) {
        return current == address(0);
    }

    function compareStrings(string memory a, string memory b)
        private
        pure
        returns (bool)
    {
        return (keccak256(abi.encodePacked((a))) ==
            keccak256(abi.encodePacked((b))));
    }

    // validations before any method
    modifier hasFounds() {
        require(msg.value == 1 ether, "invalid founds minium 1 ether");
        _;
    }

    modifier isCreator() {
        require(
            msg.sender == creator,
            "invalid permission to execute the function"
        );
        _;
    }

    modifier isNotAlreadyBet() {
        require(!glambersPlaying[msg.sender], "you already bet");
        _;
    }
}
