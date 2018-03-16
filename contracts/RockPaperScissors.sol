pragma solidity ^0.4.18;

import 'zeppelin-solidity/contracts/math/SafeMath.sol';
import 'zeppelin-solidity/contracts/ownership/Ownable.sol';

contract GameOwnership is Ownable {
    function kill() {
        selfdestruct(owner);
    }
}

contract RockPaperScissors is GameOwnership {

    using SafeMath for uint256;

    // Initial 0.01 ether
    uint betFee;
    // uint houseEdge;
    uint randNonce = 0;
    uint winParcentage = 30;

    event Result(bool _status, uint _amount);

    function RockPaperScissors(uint _betFee) {
        require(_betFee > 0);
        betFee = _betFee;
    }

    // Fallback Function
    function() public {
        revert();
    }

    function bet() payable public {
        require(this.balance > betFee);
        require(msg.value == betFee);

        uint rand = randMod(100);
        if (rand <= winParcentage) {
            returnAmount = betFee * 3;
            if(!msg.sender.send(returnAmount)) revert();
            Result(true, returnAmount);
        } else {
            Result(false, 0);
        }
    }

    function _randMod(uint _modulus) internal returns(uint) {
      randNonce++;
      return uint(keccak256(now, msg.sender, randNonce)) % _modulus;
    }

    function checkContractBalance() Owned public view returns (uint) {
        return this.balance;
    }

}
