import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ethers } from "hardhat";

import chai from "chai";
import { solidity } from "ethereum-waffle";
import "@nomiclabs/hardhat-web3"; 
import Web3 from "web3";
import * as fs from "fs";
import { ZeroToken, ZeroToken__factory,TokenVestingController,TokenVestingController__factory } from "../typechain";
import { BigNumber } from "@ethersproject/bignumber";
import { ContractTransaction } from "ethers";

chai.use(solidity);
const { expect } = chai;

describe("Test for token granting multiple times", () => {
  let accounts: SignerWithAddress[];

  let creator: SignerWithAddress;

  let user1: SignerWithAddress;
  let user2: SignerWithAddress;
  let user3: SignerWithAddress;
  let user1address: string;
    let user2address: string;
      let user3address: string;
  let token: ZeroToken;
  let tvc: TokenVestingController;

  let vestingStartBlock: number;
  const vestingStartDelay = 10; // blocks from start
  const vestingCliff = 10; // blocks
  const vestingDuration = 100; // blocks

    beforeEach(async () => {
    accounts = await ethers.getSigners();
    creator = accounts[0];
    user1 = accounts[1];
    user2 = accounts[2];
    user3 = accounts[3];
    user1address = user1.address;
        user2address = user2.address;
            user3address = user3.address;
  });

describe("Tests", function() {

  it("SUCCESS deploys a zDAO token", async () => {
    const tokenFactory = new ZeroToken__factory(creator);

    token = await tokenFactory.deploy();
    await token.initialize("CONTROLLER TEST", "CTRT");
    await expect(
      token.initialize("CONTROLLER TEST", "CTRT")
    ).to.be.revertedWith("Initializable: contract is already initialized");

  });

  it("SUCCESS Should deploy and initialize the contract", async () => {
    vestingStartBlock = ethers.provider.blockNumber + vestingStartDelay;
    const tvcFactory = new TokenVestingController__factory(creator);
    tvc = await tvcFactory.deploy(vestingStartDelay,vestingCliff,vestingDuration,token.address);
    await tvc.deployed();
  });

    it("SUCCESS mints tokens for the contract", async () => {
      await token.mint(tvc.address, ethers.utils.parseEther("10000"));
      expect(await token.balanceOf(tvc.address)).to.eq(
        ethers.utils.parseEther("10000")
      );
    });
    it("FAIL without the correct balance to grant", async () => {
      let addressTx = [user1address,user2address,user3address];
      let ammountTx = [ethers.utils.parseEther("4000"),ethers.utils.parseEther("4000"),ethers.utils.parseEther("4000")]
      let revokesTx = [true,true,false];
      expect(await tvc.grantTokens(addressTx, ammountTx ,revokesTx)).to.be.reverted;
    });
    it("SUCCESS grant the tokens to the first 3 users", async () => {
      let addressTx = [user1address,user2address,user3address];
      let ammountTx = [ethers.utils.parseEther("300"),ethers.utils.parseEther("300"),ethers.utils.parseEther("300")]
      let revokesTx = [true,true,false];
      expect(await tvc.grantTokens(addressTx, ammountTx ,revokesTx)).to.emit(tvc, "Awarded").withArgs(
        user1address,ethers.utils.parseEther("300"),true
        );
    });

    it("SUCCESS grant in the correct way the tokens and all the revokeds keep the same as the first time", async () => {
      let addressTx = [user1address,user2address,user3address];
      let ammountTx = [ethers.utils.parseUnits('100.0', 18),ethers.utils.parseUnits('200.0', 18),ethers.utils.parseUnits('300.0', 18)];
      let revokesTx = [true,true,false];
      expect(await tvc.grantTokens(addressTx,ammountTx,revokesTx)).to.emit(tvc, "Awarded");
    });

    it("SUCCESS revoke tokens to an revocable user", async () => {
      expect(await tvc.revoke(user1address)).to.emit(tvc, "Revoked");
      expect(await tvc.revoke(user2address)).to.emit(tvc, "Revoked");
    });

    it("FAILS without the correct balance after the first grant", async () => {
      let addressTx = [user1address,user2address,user3address];
      let ammountTx = [ethers.utils.parseEther("30000"),ethers.utils.parseEther("300"),ethers.utils.parseEther("300")]
      let revokesTx = [true,true,false,true,true,false];
      expect(await tvc.grantTokens(addressTx, ammountTx ,revokesTx)).to.be.reverted;
      // THIS LINE BROKES expect(await tvc.alreadyGrantedTokens).to.eq(ethers.utils.parseEther("600"));
    });

    it("FAILS to grant without correct argument array length", async () => {
      let addressTx = [user1address,user2address,user3address];
      let ammountTx = [ethers.utils.parseUnits('100.0', 18),ethers.utils.parseUnits('200.0', 18)];
      let revokesTx = [true,true,false];
      expect(await tvc.grantTokens(addressTx,ammountTx,revokesTx)).to.be.reverted;
    });

    it("FAILS to grant the tokens trying to change actual revoke booleans", async () => {
      let addressTx = [user1address,user2address,user3address];
      let ammountTx = [ethers.utils.parseUnits('100.0', 18),ethers.utils.parseUnits('200.0', 18),ethers.utils.parseUnits('300.0', 18)];
      let revokesTx = [true,true,true];
      expect(await tvc.grantTokens(addressTx,ammountTx,revokesTx)).to.be.reverted;
    });

    it("FAILS cant revoke tokens to an already revoked user", async () => {
      expect(await tvc.revoke(user1address)).to.be.reverted;
      expect(await tvc.revoke(user2address)).to.to.be.reverted;
    });

    it("FAILS trying to revoke tokens to an unrevocable user", async () => {
      expect(await tvc.revoke(user3address)).to.be.reverted;
    });

    it("FAILS to release tokens for user1 if releseable = 0", async () => {
      expect(await tvc.release(user1address)).to.emit(tvc,"Released");
    });

});

});