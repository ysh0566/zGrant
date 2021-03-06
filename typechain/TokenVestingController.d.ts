/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface TokenVestingControllerInterface extends ethers.utils.Interface {
  functions: {
    "awards(address)": FunctionFragment;
    "getReleasableAmount(address)": FunctionFragment;
    "getVestedAmount(address)": FunctionFragment;
    "grantTokens(address[],uint256[],bool[])": FunctionFragment;
    "owner()": FunctionFragment;
    "release(address)": FunctionFragment;
    "releasedTotal()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "revoke(address)": FunctionFragment;
    "targetToken()": FunctionFragment;
    "tokensToGrant()": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "vestingCliff()": FunctionFragment;
    "vestingDuration()": FunctionFragment;
    "vestingStart()": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "awards", values: [string]): string;
  encodeFunctionData(
    functionFragment: "getReleasableAmount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getVestedAmount",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "grantTokens",
    values: [string[], BigNumberish[], boolean[]]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(functionFragment: "release", values: [string]): string;
  encodeFunctionData(
    functionFragment: "releasedTotal",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "revoke", values: [string]): string;
  encodeFunctionData(
    functionFragment: "targetToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "tokensToGrant",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "vestingCliff",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "vestingDuration",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "vestingStart",
    values?: undefined
  ): string;

  decodeFunctionResult(functionFragment: "awards", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getReleasableAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getVestedAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "grantTokens",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "release", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "releasedTotal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "revoke", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "targetToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "tokensToGrant",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vestingCliff",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vestingDuration",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "vestingStart",
    data: BytesLike
  ): Result;

  events: {
    "Awarded(address,uint256,bool)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "Released(address,uint256)": EventFragment;
    "Revoked(address,uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Awarded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Released"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Revoked"): EventFragment;
}

export class TokenVestingController extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: TokenVestingControllerInterface;

  functions: {
    awards(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, boolean, boolean] & {
        amount: BigNumber;
        released: BigNumber;
        revocable: boolean;
        revoked: boolean;
      }
    >;

    getReleasableAmount(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getVestedAmount(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    grantTokens(
      addresses: string[],
      awardsAmount: BigNumberish[],
      revokeds: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    release(
      beneficiary: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    releasedTotal(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    revoke(
      beneficiary: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    targetToken(overrides?: CallOverrides): Promise<[string]>;

    tokensToGrant(overrides?: CallOverrides): Promise<[BigNumber]>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    vestingCliff(overrides?: CallOverrides): Promise<[BigNumber]>;

    vestingDuration(overrides?: CallOverrides): Promise<[BigNumber]>;

    vestingStart(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  awards(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, BigNumber, boolean, boolean] & {
      amount: BigNumber;
      released: BigNumber;
      revocable: boolean;
      revoked: boolean;
    }
  >;

  getReleasableAmount(
    beneficiary: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getVestedAmount(
    beneficiary: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  grantTokens(
    addresses: string[],
    awardsAmount: BigNumberish[],
    revokeds: boolean[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  release(
    beneficiary: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  releasedTotal(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  revoke(
    beneficiary: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  targetToken(overrides?: CallOverrides): Promise<string>;

  tokensToGrant(overrides?: CallOverrides): Promise<BigNumber>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  vestingCliff(overrides?: CallOverrides): Promise<BigNumber>;

  vestingDuration(overrides?: CallOverrides): Promise<BigNumber>;

  vestingStart(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    awards(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, boolean, boolean] & {
        amount: BigNumber;
        released: BigNumber;
        revocable: boolean;
        revoked: boolean;
      }
    >;

    getReleasableAmount(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVestedAmount(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantTokens(
      addresses: string[],
      awardsAmount: BigNumberish[],
      revokeds: boolean[],
      overrides?: CallOverrides
    ): Promise<void>;

    owner(overrides?: CallOverrides): Promise<string>;

    release(beneficiary: string, overrides?: CallOverrides): Promise<void>;

    releasedTotal(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    revoke(beneficiary: string, overrides?: CallOverrides): Promise<void>;

    targetToken(overrides?: CallOverrides): Promise<string>;

    tokensToGrant(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    vestingCliff(overrides?: CallOverrides): Promise<BigNumber>;

    vestingDuration(overrides?: CallOverrides): Promise<BigNumber>;

    vestingStart(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    Awarded(
      beneficiary?: string | null,
      amount?: null,
      revocable?: null
    ): TypedEventFilter<
      [string, BigNumber, boolean],
      { beneficiary: string; amount: BigNumber; revocable: boolean }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    Released(
      beneficiary?: string | null,
      amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { beneficiary: string; amount: BigNumber }
    >;

    Revoked(
      beneficiary?: string | null,
      revokedAmount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { beneficiary: string; revokedAmount: BigNumber }
    >;
  };

  estimateGas: {
    awards(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    getReleasableAmount(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getVestedAmount(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    grantTokens(
      addresses: string[],
      awardsAmount: BigNumberish[],
      revokeds: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    release(
      beneficiary: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    releasedTotal(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    revoke(
      beneficiary: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    targetToken(overrides?: CallOverrides): Promise<BigNumber>;

    tokensToGrant(overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    vestingCliff(overrides?: CallOverrides): Promise<BigNumber>;

    vestingDuration(overrides?: CallOverrides): Promise<BigNumber>;

    vestingStart(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    awards(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getReleasableAmount(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getVestedAmount(
      beneficiary: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    grantTokens(
      addresses: string[],
      awardsAmount: BigNumberish[],
      revokeds: boolean[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    release(
      beneficiary: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    releasedTotal(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    revoke(
      beneficiary: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    targetToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tokensToGrant(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    vestingCliff(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vestingDuration(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    vestingStart(overrides?: CallOverrides): Promise<PopulatedTransaction>;
  };
}
