// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;
import "./TokenVesting.sol";

contract TokenVestingController is TokenVesting {

  uint256 public alreadyGrantedTokens;
  
  constructor(uint256 _start,uint256 _cliff,uint256 _duration,address _token){
      __TokenVesting_init(_start, _cliff,_duration,_token);
  } 

  function grantTokens(address[] calldata addresses, uint256[] calldata awardsAmount, bool[] calldata  revokeds) external onlyOwner{

      require(addresses.length == awardsAmount.length && addresses.length == revokeds.length,"All arguments needs to be the same length");

      uint256 actualToGrant = 0;

      for(uint256 i=0; i < awardsAmount.length; i++){ //sum of all actual pretended awards
        actualToGrant += awardsAmount[i];
      }

      require (targetToken.balanceOf(address(this)) - alreadyGrantedTokens >= actualToGrant,"you cant grant more than you actually have available to grant"); //You cant grant more than you already have

        TokenAward storage award;
        for(uint256 i=0; i < awardsAmount.length; i++){
          award = getTokenAwardStorage(addresses[i]);
          if(award.amount == 0){
            _awardTokens(addresses[i],awardsAmount[i],revokeds[i]);
          }
          else if(award.amount > 0){
          require(revokeds[i]==award.revocable,"You cant change revocable bool already setted");
          _awardTokens(addresses[i],awardsAmount[i],revokeds[i]);
          }
      }
      alreadyGrantedTokens += actualToGrant; //keep a record of already granted tokens
  }
}