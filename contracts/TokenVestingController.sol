// SPDX-License-Identifier: MIT
pragma solidity ^0.8.3;
import "./TokenVesting.sol";

contract TokenVestingController is TokenVesting {
  uint256 public tokensToGrant;

  constructor(
    uint256 _start,
    uint256 _cliff,
    uint256 _duration,
    address _token
  ) {
    __TokenVesting_init(_start, _cliff, _duration, _token);
  }

  function grantTokens(
    address[] calldata addresses,
    uint256[] calldata awardsAmount,
    bool[] calldata revokeds
  ) external onlyOwner {
    require(
      addresses.length == awardsAmount.length &&
        addresses.length == revokeds.length,
      "All arguments needs to be the same length"
    );

    uint256 actualToGrant = 0;
    uint256 actualBalance = targetToken.balanceOf(address(this));
    uint256 unavailableTokens = tokensToGrant - releasedTotal;

    for (uint256 i = 0; i < awardsAmount.length; i++) {
      //sum of all actual pretended awards
      actualToGrant += awardsAmount[i];
    }

    require(
      actualBalance - unavailableTokens >= actualToGrant,
      "you cant grant more than you actually have available to grant"
    );
    TokenAward storage award;
    for (uint256 i = 0; i < awardsAmount.length; i++) {
      award = getTokenAwardStorage(addresses[i]);
      if (award.amount > 0)
        require(
          revokeds[i] == award.revocable,
          "You cant change revocable bool already setted"
        );
      _awardTokens(addresses[i], awardsAmount[i], revokeds[i]);
    }

    tokensToGrant += actualToGrant; //keep a record of already granted tokens
  }
}
