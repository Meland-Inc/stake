/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {Signer, utils, Contract, ContractFactory, Overrides} from "ethers";
import {Provider, TransactionRequest} from "@ethersproject/providers";
import type {MelandStakes, MelandStakesInterface} from "../MelandStakes";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "previousAdmin",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "newAdmin",
        type: "address",
      },
    ],
    name: "AdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "stakePoolId",
        type: "uint256",
      },
    ],
    name: "CreateStakePool",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "stakePoolId",
        type: "uint256",
      },
    ],
    name: "DefaultStakeUpdate",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "stakeId",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "eran",
        type: "uint256",
      },
    ],
    name: "Harvest",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "stakeId",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    name: "NewStake",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "previousAdminRole",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "newAdminRole",
        type: "bytes32",
      },
    ],
    name: "RoleAdminChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleGranted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        indexed: true,
        internalType: "address",
        name: "account",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "sender",
        type: "address",
      },
    ],
    name: "RoleRevoked",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "stakeId",
        type: "bytes32",
      },
    ],
    name: "StakeClaim",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "Upgraded",
    type: "event",
  },
  {
    inputs: [],
    name: "DEFAULT_ADMIN_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "GM_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "MINTER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "UPGRADER_ROLE",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "acceptedToken",
    outputs: [
      {
        internalType: "contract IERC20Upgradeable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
    ],
    name: "getRoleAdmin",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "grantRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "hasRole",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "renounceRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "role",
        type: "bytes32",
      },
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "revokeRole",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    name: "stakeById",
    outputs: [
      {
        internalType: "uint256",
        name: "stakePoolId",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "lastRecivedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "stakedAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "expiredAt",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "claimed",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "stakePoolById",
    outputs: [
      {
        internalType: "uint256",
        name: "ditaminLD",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "ditaminC",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "numberOfMELD",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "landC",
        type: "uint8",
      },
      {
        internalType: "bytes",
        name: "vipname",
        type: "bytes",
      },
      {
        internalType: "uint8",
        name: "stakeApyPercent",
        type: "uint8",
      },
      {
        internalType: "uint8",
        name: "gameApyPercent",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "freezeTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalVolume",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "stakePoolIdsByStaker",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "stakePoolSaleCountByStakePoolId",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
    ],
    name: "upgradeTo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newImplementation",
        type: "address",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "upgradeToAndCall",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "staker",
        type: "address",
      },
    ],
    name: "getUserCurrentHighLevelStake",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "stakePoolId",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "staker",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "lastRecivedAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "stakedAt",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "expiredAt",
            type: "uint256",
          },
          {
            internalType: "bool",
            name: "claimed",
            type: "bool",
          },
        ],
        internalType: "struct MelandStakesStorage.Stake",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "stakePoolId",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "harvest",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getStakerAllEarned",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60a06040523060805234801561001457600080fd5b50608051612ad0610045600039600081816108b5015281816108f50152818161098901526109c90152612ad06000f3fe6080604052600436106101405760003560e01c80638129fc1c116100b6578063d53913931161006f578063d539139314610473578063d547741f146104a7578063e95cc47d146104c7578063f72c0d8b146104dc578063feb95e6714610510578063fee496f21461053d57600080fd5b80638129fc1c1461030357806382d630871461031857806391d148541461038a578063a217fddf146103aa578063a694fc3a146103bf578063beadd5f9146103df57600080fd5b806330c7be2c1161010857806330c7be2c1461022f57806336568abe146102635780633659cfe614610283578063451c3d80146102a35780634641257d146102db5780634f1ef286146102f057600080fd5b806301ffc9a714610145578063248a9ca31461017a5780632e1a7d4d146101b85780632f2ff15d146101da5780633032ac0c146101fa575b600080fd5b34801561015157600080fd5b50610165610160366004612549565b61055d565b60405190151581526020015b60405180910390f35b34801561018657600080fd5b506101aa610195366004612573565b60009081526065602052604090206001015490565b604051908152602001610171565b3480156101c457600080fd5b506101d86101d3366004612573565b610594565b005b3480156101e657600080fd5b506101d86101f53660046125a8565b61072a565b34801561020657600080fd5b5061021a610215366004612573565b610750565b6040516101719998979695949392919061262c565b34801561023b57600080fd5b506101aa7ff5eb84615c2a00ecaf817d13794ebd6299c9e01c395bf4018453f13f577f544981565b34801561026f57600080fd5b506101d861027e3660046125a8565b61082c565b34801561028f57600080fd5b506101d861029e366004612688565b6108aa565b3480156102af57600080fd5b506098546102c3906001600160a01b031681565b6040516001600160a01b039091168152602001610171565b3480156102e757600080fd5b506101d8610973565b6101d86102fe3660046126b9565b61097e565b34801561030f57600080fd5b506101d8610a34565b34801561032457600080fd5b50610338610333366004612688565b610cba565b6040516101719190815181526020808301516001600160a01b03169082015260408083015190820152606080830151908201526080808301519082015260a09182015115159181019190915260c00190565b34801561039657600080fd5b506101656103a53660046125a8565b610ccb565b3480156103b657600080fd5b506101aa600081565b3480156103cb57600080fd5b506101d86103da366004612573565b610cf6565b3480156103eb57600080fd5b5061043c6103fa366004612573565b609c6020526000908152604090208054600182015460028301546003840154600485015460059095015493946001600160a01b03909316939192909160ff1686565b604080519687526001600160a01b0390951660208701529385019290925260608401526080830152151560a082015260c001610171565b34801561047f57600080fd5b506101aa7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a681565b3480156104b357600080fd5b506101d86104c23660046125a8565b610d00565b3480156104d357600080fd5b506101aa610d26565b3480156104e857600080fd5b506101aa7f189ab7a9244df0848122154315af71fe140f3db0fe014031783b0946b8c9d2e381565b34801561051c57600080fd5b506101aa61052b366004612573565b609b6020526000908152604090205481565b34801561054957600080fd5b506101aa61055836600461277b565b610d37565b60006001600160e01b03198216637965db0b60e01b148061058e57506301ffc9a760e01b6001600160e01b03198316145b92915050565b7ff5eb84615c2a00ecaf817d13794ebd6299c9e01c395bf4018453f13f577f54496105bf8133610d68565b60985482906001600160a01b03166370a08231336040516001600160e01b031960e084901b1681526001600160a01b03909116600482015260240160206040518083038186803b15801561061257600080fd5b505afa158015610626573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061064a91906127a5565b116106935760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b60448201526064015b60405180910390fd5b6098546001600160a01b031663a9059cbb336040516001600160e01b031960e084901b1681526001600160a01b03909116600482015260248101859052604401602060405180830381600087803b1580156106ed57600080fd5b505af1158015610701573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061072591906127be565b505050565b6000828152606560205260409020600101546107468133610d68565b6107258383610dcc565b609a602052600090815260409020805460018201546002830154600384015460048501805494959394929360ff9092169261078a906127e0565b80601f01602080910402602001604051908101604052809291908181526020018280546107b6906127e0565b80156108035780601f106107d857610100808354040283529160200191610803565b820191906000526020600020905b8154815290600101906020018083116107e657829003601f168201915b50505060058401546006850154600790950154939460ff80831695610100909304169350915089565b6001600160a01b038116331461089c5760405162461bcd60e51b815260206004820152602f60248201527f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636560448201526e103937b632b9903337b91039b2b63360891b606482015260840161068a565b6108a68282610e52565b5050565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156108f35760405162461bcd60e51b815260040161068a9061281b565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b0316610925610eb9565b6001600160a01b03161461094b5760405162461bcd60e51b815260040161068a90612867565b61095481610ee7565b6040805160008082526020820190925261097091839190610f12565b50565b61097c3361105d565b565b306001600160a01b037f00000000000000000000000000000000000000000000000000000000000000001614156109c75760405162461bcd60e51b815260040161068a9061281b565b7f00000000000000000000000000000000000000000000000000000000000000006001600160a01b03166109f9610eb9565b6001600160a01b031614610a1f5760405162461bcd60e51b815260040161068a90612867565b610a2882610ee7565b6108a682826001610f12565b600054610100900460ff1680610a4d575060005460ff16155b610a695760405162461bcd60e51b815260040161068a906128b3565b600054610100900460ff16158015610a8b576000805461ffff19166101011790555b610a93611118565b610a9b611193565b610b18610b1360405180610120016040528060fa8152602001600a815260200160008152602001600860ff168152602001604051806040016040528060048152602001634672656560e01b8152508152602001600060ff168152602001600060ff168152602001600081526020016000815250611224565b61130d565b610b9c60405180610120016040528061012c8152602001600f81526020016902544faa778090e000008152602001600f60ff1681526020016040518060400160405280600681526020016529b4b63b32b960d11b8152508152602001601860ff168152602001602460ff16815260200162278d0081526020016103e8815250611224565b50610c1f6040518061012001604052806103e88152602001602881526020016908c9b831ab9396f000008152602001601860ff1681526020016040518060400160405280600481526020016311dbdb1960e21b8152508152602001602060ff168152602001603060ff168152602001624f1a008152602001610190815250611224565b50610ca56040518061012001604052806105dc815260200160508152602001690e1df89a1c64df6800008152602001602360ff16815260200160405180604001604052806008815260200167506c6174696e756d60c01b8152508152602001602860ff168152602001603c60ff1681526020016276a700815260200160c8815250611224565b508015610970576000805461ff001916905550565b610cc261246f565b61058e826113a3565b60009182526065602090815260408084206001600160a01b0393909316845291905290205460ff1690565b6109703382611691565b600082815260656020526040902060010154610d1c8133610d68565b6107258383610e52565b6000610d323342611b71565b905090565b609d6020528160005260406000208181548110610d5357600080fd5b90600052602060002001600091509150505481565b610d728282610ccb565b6108a657610d8a816001600160a01b03166014611c2c565b610d95836020611c2c565b604051602001610da6929190612901565b60408051601f198184030181529082905262461bcd60e51b825261068a91600401612976565b610dd68282610ccb565b6108a65760008281526065602090815260408083206001600160a01b03851684529091529020805460ff19166001179055610e0e3390565b6001600160a01b0316816001600160a01b0316837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45050565b610e5c8282610ccb565b156108a65760008281526065602090815260408083206001600160a01b0385168085529252808320805460ff1916905551339285917ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b9190a45050565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc546001600160a01b031690565b7f189ab7a9244df0848122154315af71fe140f3db0fe014031783b0946b8c9d2e36108a68133610d68565b6000610f1c610eb9565b9050610f2784611dcf565b600083511180610f345750815b15610f4557610f438484611e74565b505b7f4910fdfa16fed3260ed0e7147f7cc6da11a60208b5b9406d12a635614ffd9143805460ff1661105657805460ff191660011781556040516001600160a01b0383166024820152610fc490869060440160408051601f198184030181529190526020810180516001600160e01b0316631b2ce7f360e11b179052611e74565b50805460ff19168155610fd5610eb9565b6001600160a01b0316826001600160a01b03161461104d5760405162461bcd60e51b815260206004820152602f60248201527f45524331393637557067726164653a207570677261646520627265616b73206660448201526e75727468657220757067726164657360881b606482015260840161068a565b61105685611f5f565b5050505050565b6001600160a01b0381166000908152609d6020908152604080832080548251818502810185019093528083524294938301828280156110bb57602002820191906000526020600020905b8154815260200190600101908083116110a7575b5050505050905060005b81518110156111125760006110f3858484815181106110e6576110e6612989565b6020026020010151611f9f565b90506110ff8185611fe6565b508061110a816129b5565b9150506110c5565b50505050565b600054610100900460ff1680611131575060005460ff16155b61114d5760405162461bcd60e51b815260040161068a906128b3565b600054610100900460ff1615801561116f576000805461ffff19166101011790555b611177612130565b61117f612130565b8015610970576000805461ff001916905550565b61119b61219a565b6111a6600033610dcc565b6111d07ff5eb84615c2a00ecaf817d13794ebd6299c9e01c395bf4018453f13f577f544933610dcc565b6111fa7f9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a633610dcc565b61097c7f189ab7a9244df0848122154315af71fe140f3db0fe014031783b0946b8c9d2e333610dcc565b60008061123060975490565b9050611240609780546001019055565b6000818152609a602090815260409182902085518155858201516001820155918501516002830155606085015160038301805460ff191660ff9092169190911790556080850151805186939261129d9260048501929101906124b0565b5060a082015160058201805460c085015160ff90811661010090810261ffff19909316919094161717905560e083015160068301559091015160079091015560405181907f732fae86df8a4bd294a9e9cdb3a5e58953d219c9acaa73b4794807004d23098890600090a292915050565b6000818152609a602052604090206004018054611329906127e0565b151590506113705760405162461bcd60e51b81526020600482015260146024820152731cdd185ad9481c1bdbdb081b9bdd08199bdd5b9960621b604482015260640161068a565b609981905560405181907f720e2ed7faf3513cd9b564022fd7d6b0a91aa3eb2dccab1c20fccb0f2a597cac90600090a250565b6113ab61246f565b6001600160a01b0382166000908152609d6020908152604080832080548251818502810185019093528083528493849392919083018282801561140d57602002820191906000526020600020905b8154815260200190600101908083116113f9575b5050505050905060005b81518110156115c257600082828151811061143457611434612989565b6020026020010151905042609c600061144d8a85611f9f565b815260200190815260200160002060040154101561146b57506115b0565b6000818152609a6020908152604080832081516101208101835281548152600182015493810193909352600281015491830191909152600381015460ff1660608301526004810180546080840191906114c3906127e0565b80601f01602080910402602001604051908101604052809291908181526020018280546114ef906127e0565b801561153c5780601f106115115761010080835404028352916020019161153c565b820191906000526020600020905b81548152906001019060200180831161151f57829003601f168201915b5050509183525050600582015460ff8082166020840152610100909104811660408301526006830154606083015260079092015460809091015260c0820151919250868116911611156115ad578060c0015194508383815181106115a2576115a2612989565b602002602001015195505b50505b806115ba816129b5565b915050611417565b505081611619576040518060c001604052806099548152602001856001600160a01b03168152602001428152602001428152602001426301e1338061160791906129d0565b81526001602090910152949350505050565b609c60006116278685611f9f565b81526020808201929092526040908101600020815160c0810183528154815260018201546001600160a01b03169381019390935260028101549183019190915260038101546060830152600481015460808301526005015460ff16151560a0820152949350505050565b6000818152609a6020908152604080832081516101208101835281548152600182015493810193909352600281015491830191909152600381015460ff1660608301526004810180546080840191906116e9906127e0565b80601f0160208091040260200160405190810160405280929190818152602001828054611715906127e0565b80156117625780601f1061173757610100808354040283529160200191611762565b820191906000526020600020905b81548152906001019060200180831161174557829003601f168201915b5050509183525050600582015460ff808216602084015261010090910416604082015260068201546060820152600790910154608091820152810151519091506117e55760405162461bcd60e51b81526020600482015260146024820152731cdd185ad9481c1bdbdb081b9bdd08199bdd5b9960621b604482015260640161068a565b6101008101516000838152609b6020526040902054106118475760405162461bcd60e51b815260206004820152601760248201527f496e73756666696369656e7420706f6f6c207368617265000000000000000000604482015260640161068a565b60006118538484611f9f565b6000818152609c6020526040902054909150156118b25760405162461bcd60e51b815260206004820181905260248201527f4f6e6c79206f6e65207374616b6520666f72207468652073616d6520706f6f6c604482015260640161068a565b6000838152609b602052604081208054600192906118d19084906129d0565b90915550506040828101516098549151636eb1769f60e11b81526001600160a01b0387811660048301523060248301529192919091169063dd62ed3e9060440160206040518083038186803b15801561192957600080fd5b505afa15801561193d573d6000803e3d6000fd5b505050506040513d601f19601f8201168201806040525081019061196191906127a5565b1182604001516040516020016119a391907f616c6c6f77616e636520696e73756666696369656e74206372656469742028008152601f810191909152603f0190565b604051602081830303815290604052906119d05760405162461bcd60e51b815260040161068a9190612976565b5060985460408381015190516323b872dd60e01b81526001600160a01b03878116600483015230602483015260448201929092529116906323b872dd90606401602060405180830381600087803b158015611a2a57600080fd5b505af1158015611a3e573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190611a6291906127be565b506001600160a01b0384166000818152609d60209081526040808320805460018101825590845282842001879055805160c08101825287815291820193909352429281018390526060810183905260e0850151919290916080830191611ac891906129d0565b815260006020918201819052848152609c8252604080822084518155928401516001840180546001600160a01b0319166001600160a01b03928316179055848201516002850155606085015160038501556080850151600485015560a08501516005909401805460ff191694151594909417909355519293509087169184917f9fe79936194ebb2b9e1fef7bc9eaf5a81c14d670b0489c53004ab3115e6709df91a35050505050565b6001600160a01b0382166000908152609d6020908152604080832080548251818502810185019093528083528493830182828015611bce57602002820191906000526020600020905b815481526020019060010190808311611bba575b50505050509050600080600090505b8251811015611c2357611c05611bff878584815181106110e6576110e6612989565b866121f9565b611c0f90836129d0565b915080611c1b816129b5565b915050611bdd565b50949350505050565b60606000611c3b8360026129e8565b611c469060026129d0565b67ffffffffffffffff811115611c5e57611c5e6126a3565b6040519080825280601f01601f191660200182016040528015611c88576020820181803683370190505b509050600360fc1b81600081518110611ca357611ca3612989565b60200101906001600160f81b031916908160001a905350600f60fb1b81600181518110611cd257611cd2612989565b60200101906001600160f81b031916908160001a9053506000611cf68460026129e8565b611d019060016129d0565b90505b6001811115611d79576f181899199a1a9b1b9c1cb0b131b232b360811b85600f1660108110611d3557611d35612989565b1a60f81b828281518110611d4b57611d4b612989565b60200101906001600160f81b031916908160001a90535060049490941c93611d7281612a07565b9050611d04565b508315611dc85760405162461bcd60e51b815260206004820181905260248201527f537472696e67733a20686578206c656e67746820696e73756666696369656e74604482015260640161068a565b9392505050565b803b611e335760405162461bcd60e51b815260206004820152602d60248201527f455243313936373a206e657720696d706c656d656e746174696f6e206973206e60448201526c1bdd08184818dbdb9d1c9858dd609a1b606482015260840161068a565b7f360894a13ba1a3210667c828492db98dca3e2076cc3735a920a3ca505d382bbc80546001600160a01b0319166001600160a01b0392909216919091179055565b6060823b611ed35760405162461bcd60e51b815260206004820152602660248201527f416464726573733a2064656c65676174652063616c6c20746f206e6f6e2d636f6044820152651b9d1c9858dd60d21b606482015260840161068a565b600080846001600160a01b031684604051611eee9190612a1e565b600060405180830381855af49150503d8060008114611f29576040519150601f19603f3d011682016040523d82523d6000602084013e611f2e565b606091505b5091509150611f568282604051806060016040528060278152602001612a7460279139612436565b95945050505050565b611f6881611dcf565b6040516001600160a01b038216907fbc7cd75a20ee27fd9adebab32041f755214dbc6bffa90cc0225b39da2e5c2d3b90600090a250565b6040516bffffffffffffffffffffffff19606084901b1660208201526034810182905260009060540160405160208183030381529060405280519060200120905092915050565b6000828152609c60209081526040808320815160c0810183528154815260018201546001600160a01b03169381019390935260028101549183019190915260038101546060830152600481015460808301526005015460ff16151560a08201529061205184846121f9565b90508061205e5750505050565b60408281018490526098546020840151915163a9059cbb60e01b81526001600160a01b0392831660048201526024810184905291169063a9059cbb90604401602060405180830381600087803b1580156120b757600080fd5b505af11580156120cb573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906120ef91906127be565b50837fd3ab9a69ac1632a6447fe8ed278bf0868cb4e8b70c9f0630769bb07b5abe513c8260405161212291815260200190565b60405180910390a250505050565b600054610100900460ff1680612149575060005460ff16155b6121655760405162461bcd60e51b815260040161068a906128b3565b600054610100900460ff1615801561117f576000805461ffff19166101011790558015610970576000805461ff001916905550565b600054610100900460ff16806121b3575060005460ff16155b6121cf5760405162461bcd60e51b815260040161068a906128b3565b600054610100900460ff161580156121f1576000805461ffff19166101011790555b61116f612130565b6000828152609c60209081526040808320815160c081018352815480825260018301546001600160a01b03169482019490945260028201549281019290925260038101546060830152600481015460808301526005015460ff16151560a08201529061226957600091505061058e565b80516000908152609a6020908152604080832081516101208101835281548152600182015493810193909352600281015491830191909152600381015460ff1660608301526004810180546080840191906122c3906127e0565b80601f01602080910402602001604051908101604052809291908181526020018280546122ef906127e0565b801561233c5780601f106123115761010080835404028352916020019161233c565b820191906000526020600020905b81548152906001019060200180831161231f57829003601f168201915b5050509183525050600582015460ff808216602084015261010090910416604080830191909152600683015460608301526007909201546080918201528401519084015191925014156123945760009250505061058e565b6000826040015183608001516123aa9190612a3a565b905060008360400151866123be9190612a3a565b9050818111156123cb5750805b600060648460a0015160ff1685604001516123e691906129e8565b6123f09190612a51565b90506000610e108560e00151836124079190612a51565b6124119190612a51565b905061241f610e1084612a51565b61242990826129e8565b9998505050505050505050565b60608315612445575081611dc8565b8251156124555782518084602001fd5b8160405162461bcd60e51b815260040161068a9190612976565b6040518060c001604052806000815260200160006001600160a01b031681526020016000815260200160008152602001600081526020016000151581525090565b8280546124bc906127e0565b90600052602060002090601f0160209004810192826124de5760008555612524565b82601f106124f757805160ff1916838001178555612524565b82800160010185558215612524579182015b82811115612524578251825591602001919060010190612509565b50612530929150612534565b5090565b5b808211156125305760008155600101612535565b60006020828403121561255b57600080fd5b81356001600160e01b031981168114611dc857600080fd5b60006020828403121561258557600080fd5b5035919050565b80356001600160a01b03811681146125a357600080fd5b919050565b600080604083850312156125bb57600080fd5b823591506125cb6020840161258c565b90509250929050565b60005b838110156125ef5781810151838201526020016125d7565b838111156111125750506000910152565b600081518084526126188160208601602086016125d4565b601f01601f19169290920160200192915050565b60006101208b83528a602084015289604084015260ff8916606084015280608084015261265b81840189612600565b60ff97881660a08501529590961660c08301525060e0810192909252610100909101529695505050505050565b60006020828403121561269a57600080fd5b611dc88261258c565b634e487b7160e01b600052604160045260246000fd5b600080604083850312156126cc57600080fd5b6126d58361258c565b9150602083013567ffffffffffffffff808211156126f257600080fd5b818501915085601f83011261270657600080fd5b813581811115612718576127186126a3565b604051601f8201601f19908116603f01168101908382118183101715612740576127406126a3565b8160405282815288602084870101111561275957600080fd5b8260208601602083013760006020848301015280955050505050509250929050565b6000806040838503121561278e57600080fd5b6127978361258c565b946020939093013593505050565b6000602082840312156127b757600080fd5b5051919050565b6000602082840312156127d057600080fd5b81518015158114611dc857600080fd5b600181811c908216806127f457607f821691505b6020821081141561281557634e487b7160e01b600052602260045260246000fd5b50919050565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b19195b1959d85d1958d85b1b60a21b606082015260800190565b6020808252602c908201527f46756e6374696f6e206d7573742062652063616c6c6564207468726f7567682060408201526b6163746976652070726f787960a01b606082015260800190565b6020808252602e908201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160408201526d191e481a5b9a5d1a585b1a5e995960921b606082015260800190565b7f416363657373436f6e74726f6c3a206163636f756e74200000000000000000008152600083516129398160178501602088016125d4565b7001034b99036b4b9b9b4b733903937b6329607d1b601791840191820152835161296a8160288401602088016125d4565b01602801949350505050565b602081526000611dc86020830184612600565b634e487b7160e01b600052603260045260246000fd5b634e487b7160e01b600052601160045260246000fd5b60006000198214156129c9576129c961299f565b5060010190565b600082198211156129e3576129e361299f565b500190565b6000816000190483118215151615612a0257612a0261299f565b500290565b600081612a1657612a1661299f565b506000190190565b60008251612a308184602087016125d4565b9190910192915050565b600082821015612a4c57612a4c61299f565b500390565b600082612a6e57634e487b7160e01b600052601260045260246000fd5b50049056fe416464726573733a206c6f772d6c6576656c2064656c65676174652063616c6c206661696c6564a26469706673582212206cc02f54c121080bdc2978f3e263099cc09236623c9b92d07a6ef045817aefe164736f6c63430008090033";

export class MelandStakes__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & {from?: string | Promise<string>}
  ): Promise<MelandStakes> {
    return super.deploy(overrides || {}) as Promise<MelandStakes>;
  }
  getDeployTransaction(
    overrides?: Overrides & {from?: string | Promise<string>}
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MelandStakes {
    return super.attach(address) as MelandStakes;
  }
  connect(signer: Signer): MelandStakes__factory {
    return super.connect(signer) as MelandStakes__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MelandStakesInterface {
    return new utils.Interface(_abi) as MelandStakesInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MelandStakes {
    return new Contract(address, _abi, signerOrProvider) as MelandStakes;
  }
}