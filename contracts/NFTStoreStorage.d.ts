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
  CallOverrides,
} from "ethers";
import {BytesLike} from "@ethersproject/bytes";
import {Listener, Provider} from "@ethersproject/providers";
import {FunctionFragment, EventFragment, Result} from "@ethersproject/abi";
import type {TypedEventFilter, TypedEvent, TypedListener} from "./common";

interface NFTStoreStorageInterface extends ethers.utils.Interface {
  functions: {
    "acceptedToken()": FunctionFragment;
    "foundationWallet()": FunctionFragment;
    "itemUploadedMap(address)": FunctionFragment;
    "officialWallet()": FunctionFragment;
    "ownerCutPerMillion()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "acceptedToken",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "foundationWallet",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "itemUploadedMap",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "officialWallet",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "ownerCutPerMillion",
    values?: undefined
  ): string;

  decodeFunctionResult(
    functionFragment: "acceptedToken",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "foundationWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "itemUploadedMap",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "officialWallet",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "ownerCutPerMillion",
    data: BytesLike
  ): Result;

  events: {
    "ChangedOwnerCutPerMillion(uint256)": EventFragment;
    "NFTBuyed(address,address,uint256,uint256)": EventFragment;
    "NFTCreated(address)": EventFragment;
    "NFTDelete(address)": EventFragment;
    "NFTItemUpdate(address,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "ChangedOwnerCutPerMillion"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NFTBuyed"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NFTCreated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NFTDelete"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NFTItemUpdate"): EventFragment;
}

export type ChangedOwnerCutPerMillionEvent = TypedEvent<
  [BigNumber] & {ownerCutPerMillion: BigNumber}
>;

export type NFTBuyedEvent = TypedEvent<
  [string, string, BigNumber, BigNumber] & {
    buyer: string;
    nftAddress: string;
    tokenId: BigNumber;
    priceInWei: BigNumber;
  }
>;

export type NFTCreatedEvent = TypedEvent<[string] & {nftAddress: string}>;

export type NFTDeleteEvent = TypedEvent<[string] & {nftAddress: string}>;

export type NFTItemUpdateEvent = TypedEvent<
  [string, boolean] & {nftAddress: string; checked: boolean}
>;

export class NFTStoreStorage extends BaseContract {
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

  interface: NFTStoreStorageInterface;

  functions: {
    acceptedToken(overrides?: CallOverrides): Promise<[string]>;

    foundationWallet(overrides?: CallOverrides): Promise<[string]>;

    itemUploadedMap(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    officialWallet(overrides?: CallOverrides): Promise<[string]>;

    ownerCutPerMillion(overrides?: CallOverrides): Promise<[BigNumber]>;
  };

  acceptedToken(overrides?: CallOverrides): Promise<string>;

  foundationWallet(overrides?: CallOverrides): Promise<string>;

  itemUploadedMap(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  officialWallet(overrides?: CallOverrides): Promise<string>;

  ownerCutPerMillion(overrides?: CallOverrides): Promise<BigNumber>;

  callStatic: {
    acceptedToken(overrides?: CallOverrides): Promise<string>;

    foundationWallet(overrides?: CallOverrides): Promise<string>;

    itemUploadedMap(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    officialWallet(overrides?: CallOverrides): Promise<string>;

    ownerCutPerMillion(overrides?: CallOverrides): Promise<BigNumber>;
  };

  filters: {
    "ChangedOwnerCutPerMillion(uint256)"(
      ownerCutPerMillion?: null
    ): TypedEventFilter<[BigNumber], {ownerCutPerMillion: BigNumber}>;

    ChangedOwnerCutPerMillion(
      ownerCutPerMillion?: null
    ): TypedEventFilter<[BigNumber], {ownerCutPerMillion: BigNumber}>;

    "NFTBuyed(address,address,uint256,uint256)"(
      buyer?: string | null,
      nftAddress?: string | null,
      tokenId?: null,
      priceInWei?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        buyer: string;
        nftAddress: string;
        tokenId: BigNumber;
        priceInWei: BigNumber;
      }
    >;

    NFTBuyed(
      buyer?: string | null,
      nftAddress?: string | null,
      tokenId?: null,
      priceInWei?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        buyer: string;
        nftAddress: string;
        tokenId: BigNumber;
        priceInWei: BigNumber;
      }
    >;

    "NFTCreated(address)"(
      nftAddress?: null
    ): TypedEventFilter<[string], {nftAddress: string}>;

    NFTCreated(
      nftAddress?: null
    ): TypedEventFilter<[string], {nftAddress: string}>;

    "NFTDelete(address)"(
      nftAddress?: null
    ): TypedEventFilter<[string], {nftAddress: string}>;

    NFTDelete(
      nftAddress?: null
    ): TypedEventFilter<[string], {nftAddress: string}>;

    "NFTItemUpdate(address,bool)"(
      nftAddress?: null,
      checked?: null
    ): TypedEventFilter<
      [string, boolean],
      {nftAddress: string; checked: boolean}
    >;

    NFTItemUpdate(
      nftAddress?: null,
      checked?: null
    ): TypedEventFilter<
      [string, boolean],
      {nftAddress: string; checked: boolean}
    >;
  };

  estimateGas: {
    acceptedToken(overrides?: CallOverrides): Promise<BigNumber>;

    foundationWallet(overrides?: CallOverrides): Promise<BigNumber>;

    itemUploadedMap(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    officialWallet(overrides?: CallOverrides): Promise<BigNumber>;

    ownerCutPerMillion(overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    acceptedToken(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    foundationWallet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    itemUploadedMap(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    officialWallet(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ownerCutPerMillion(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}