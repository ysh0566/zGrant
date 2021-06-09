/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  utils,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  TokenVestingController,
  TokenVestingControllerInterface,
} from "../TokenVestingController";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_start",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_cliff",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_duration",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_token",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "revocable",
        type: "bool",
      },
    ],
    name: "Awarded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Released",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "revokedAmount",
        type: "uint256",
      },
    ],
    name: "Revoked",
    type: "event",
  },
  {
    inputs: [],
    name: "alreadyGrantedTokens",
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
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "awards",
    outputs: [
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "released",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "revocable",
        type: "bool",
      },
      {
        internalType: "bool",
        name: "revoked",
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
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "getReleasableAmount",
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
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "getVestedAmount",
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
        internalType: "address[]",
        name: "addresses",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "awardsAmount",
        type: "uint256[]",
      },
      {
        internalType: "bool[]",
        name: "revokeds",
        type: "bool[]",
      },
    ],
    name: "grantTokens",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
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
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "release",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "beneficiary",
        type: "address",
      },
    ],
    name: "revoke",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "targetToken",
    outputs: [
      {
        internalType: "contract IERC20",
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
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "vestingCliff",
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
    inputs: [],
    name: "vestingDuration",
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
    inputs: [],
    name: "vestingStart",
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
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002a2138038062002a21833981810160405281019062000037919062000595565b6200004b848484846200005560201b60201c565b505050506200081a565b600060019054906101000a900460ff16806200007c575060008054906101000a900460ff16155b620000be576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620000b59062000671565b60405180910390fd5b60008060019054906101000a900460ff1615905080156200010f576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b6200011f620001f160201b60201c565b8284111562000165576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200015c906200064f565b60405180910390fd5b8460658190555083856200017a9190620006a4565b6066819055508260678190555081606960006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508015620001ea5760008060016101000a81548160ff0219169083151502179055505b5050505050565b600060019054906101000a900460ff168062000218575060008054906101000a900460ff16155b6200025a576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620002519062000671565b60405180910390fd5b60008060019054906101000a900460ff161590508015620002ab576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b620002bb620002f060201b60201c565b620002cb620003cf60201b60201c565b8015620002ed5760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff168062000317575060008054906101000a900460ff16155b62000359576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401620003509062000671565b60405180910390fd5b60008060019054906101000a900460ff161590508015620003aa576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b8015620003cc5760008060016101000a81548160ff0219169083151502179055505b50565b600060019054906101000a900460ff1680620003f6575060008054906101000a900460ff16155b62000438576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016200042f9062000671565b60405180910390fd5b60008060019054906101000a900460ff16159050801562000489576001600060016101000a81548160ff02191690831515021790555060016000806101000a81548160ff0219169083151502179055505b60006200049b6200055f60201b60201c565b905080603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35080156200055c5760008060016101000a81548160ff0219169083151502179055505b50565b600033905090565b6000815190506200057881620007e6565b92915050565b6000815190506200058f8162000800565b92915050565b60008060008060808587031215620005ac57600080fd5b6000620005bc878288016200057e565b9450506020620005cf878288016200057e565b9350506040620005e2878288016200057e565b9250506060620005f58782880162000567565b91505092959194509250565b60006200061060208362000693565b91506200061d826200076e565b602082019050919050565b600062000637602e8362000693565b9150620006448262000797565b604082019050919050565b600060208201905081810360008301526200066a8162000601565b9050919050565b600060208201905081810360008301526200068c8162000628565b9050919050565b600082825260208201905092915050565b6000620006b18262000735565b9150620006be8362000735565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115620006f657620006f56200073f565b5b828201905092915050565b60006200070e8262000715565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f436c696666206d757374206265206c657373207468616e206475726174696f6e600082015250565b7f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160008201527f647920696e697469616c697a6564000000000000000000000000000000000000602082015250565b620007f18162000701565b8114620007fd57600080fd5b50565b6200080b8162000735565b81146200081757600080fd5b50565b6121f7806200082a6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80637b0e5f561161008c578063d5a73fdd11610066578063d5a73fdd14610228578063e60e268514610258578063f2fde38b14610276578063f3640e7414610292576100ea565b80637b0e5f56146101bb5780638da5cb5b146101ee578063a8d7f38c1461020c576100ea565b80632afd1a7d116100c85780632afd1a7d14610147578063327107f714610177578063715018a61461019557806374a8f1031461019f576100ea565b80631514617e146100ef578063191655871461010d578063254800d414610129575b600080fd5b6100f76102b0565b6040516101049190611bae565b60405180910390f35b61012760048036038101906101229190611647565b6102b6565b005b6101316103ce565b60405161013e9190611bae565b60405180910390f35b610161600480360381019061015c9190611647565b6103d4565b60405161016e9190611bae565b60405180910390f35b61017f610402565b60405161018c9190611a11565b60405180910390f35b61019d610428565b005b6101b960048036038101906101b49190611647565b610565565b005b6101d560048036038101906101d09190611647565b61083e565b6040516101e59493929190611bf2565b60405180910390f35b6101f6610888565b60405161020391906119cd565b60405180910390f35b61022660048036038101906102219190611670565b6108b2565b005b610242600480360381019061023d9190611647565b610e20565b60405161024f9190611bae565b60405180910390f35b610260610ea6565b60405161026d9190611bae565b60405180910390f35b610290600480360381019061028b9190611647565b610eac565b005b61029a611058565b6040516102a79190611bae565b60405180910390f35b60675481565b60006102c1826103d4565b905060008111610306576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102fd90611aae565b60405180910390fd5b60006103118361105e565b9050818160010160008282546103279190611c69565b9250508190555061037b8383606960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166110ab9092919063ffffffff16565b8273ffffffffffffffffffffffffffffffffffffffff167fb21fb52d5749b80f3182f8c6992236b5e5576681880914484d7f4c9b062e619e836040516103c19190611bae565b60405180910390a2505050565b60655481565b6000806103e083611131565b905080602001516103f084610e20565b6103fa9190611d4a565b915050919050565b606960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6104306111da565b73ffffffffffffffffffffffffffffffffffffffff1661044e610888565b73ffffffffffffffffffffffffffffffffffffffff16146104a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161049b90611ace565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff16603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a36000603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b61056d6111da565b73ffffffffffffffffffffffffffffffffffffffff1661058b610888565b73ffffffffffffffffffffffffffffffffffffffff16146105e1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016105d890611ace565b60405180910390fd5b60006105ec8261105e565b90508060020160009054906101000a900460ff1661063f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161063690611b4e565b60405180910390fd5b8060020160019054906101000a900460ff1615610691576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161068890611b8e565b60405180910390fd5b600061069c836103d4565b9050808260010160008282546106b29190611c69565b925050819055506000826001015483600001546106cf9190611d4a565b905060018360020160016101000a81548160ff021916908315150217905550826001015483600001819055506107488483606960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166110ab9092919063ffffffff16565b61079c610753610888565b82606960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166110ab9092919063ffffffff16565b8373ffffffffffffffffffffffffffffffffffffffff167fb21fb52d5749b80f3182f8c6992236b5e5576681880914484d7f4c9b062e619e836040516107e29190611bae565b60405180910390a28373ffffffffffffffffffffffffffffffffffffffff167f713b90881ad62c4fa8ab6bd9197fa86481fc0c11b2edba60026514281b2dbac4826040516108309190611bae565b60405180910390a250505050565b60686020528060005260406000206000915090508060000154908060010154908060020160009054906101000a900460ff16908060020160019054906101000a900460ff16905084565b6000603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6108ba6111da565b73ffffffffffffffffffffffffffffffffffffffff166108d8610888565b73ffffffffffffffffffffffffffffffffffffffff161461092e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161092590611ace565b60405180910390fd5b838390508686905014801561094857508181905086869050145b610987576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161097e90611b2e565b60405180910390fd5b6000805b858590508110156109f6578585828181106109cf577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020135826109e19190611c69565b915080806109ee90611e1d565b91505061098b565b5080606a54606960009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166370a08231306040518263ffffffff1660e01b8152600401610a5691906119cd565b60206040518083038186803b158015610a6e57600080fd5b505afa158015610a82573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aa69190611766565b610ab09190611d4a565b1015610af1576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610ae890611aee565b60405180910390fd5b600080600090505b86869050811015610dfc57610b5a898983818110610b40577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050602002016020810190610b559190611647565b61105e565b9150600082600001541415610c5257610c4d898983818110610ba5577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050602002016020810190610bba9190611647565b888884818110610bf3577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020135878785818110610c33577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050602002016020810190610c489190611714565b6111e2565b610de9565b600082600001541115610de8578160020160009054906101000a900460ff161515858583818110610cac577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050602002016020810190610cc19190611714565b151514610d03576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610cfa90611a6e565b60405180910390fd5b610de7898983818110610d3f577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050602002016020810190610d549190611647565b888884818110610d8d577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b90506020020135878785818110610dcd577f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b9050602002016020810190610de29190611714565b6111e2565b5b5b8080610df490611e1d565b915050610af9565b5081606a6000828254610e0f9190611c69565b925050819055505050505050505050565b600080610e2c83611131565b9050606654431015610e42576000915050610ea1565b606754606554610e529190611c69565b43101580610e61575080606001515b15610e73578060000151915050610ea1565b60675460655443610e849190611d4a565b8260000151610e939190611cf0565b610e9d9190611cbf565b9150505b919050565b606a5481565b610eb46111da565b73ffffffffffffffffffffffffffffffffffffffff16610ed2610888565b73ffffffffffffffffffffffffffffffffffffffff1614610f28576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f1f90611ace565b60405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415610f98576040517f08c379a0000000000000000000000000000000000000000000000000000000008152600401610f8f90611a4e565b60405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff16603360009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a380603360006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b60665481565b600080606860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020905080915050919050565b61112c8363a9059cbb60e01b84846040516024016110ca9291906119e8565b604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff838183161783525050505061127c565b505050565b6111396114e9565b6000606860008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060405180608001604052908160008201548152602001600182015481526020016002820160009054906101000a900460ff161515151581526020016002820160019054906101000a900460ff161515151581525050905080915050919050565b600033905090565b60006111ed8461105e565b9050828160000160008282546112039190611c69565b92505081905550818160020160006101000a81548160ff0219169083151502179055508373ffffffffffffffffffffffffffffffffffffffff167f697e6d7320b6a08823f27741374087448ab35ae15392e2feff275172876a7d09848460405161126e929190611bc9565b60405180910390a250505050565b60006112de826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c65648152508573ffffffffffffffffffffffffffffffffffffffff166113439092919063ffffffff16565b905060008151111561133e57808060200190518101906112fe919061173d565b61133d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161133490611b6e565b60405180910390fd5b5b505050565b6060611352848460008561135b565b90509392505050565b6060824710156113a0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161139790611a8e565b60405180910390fd5b6113a98561146f565b6113e8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016113df90611b0e565b60405180910390fd5b6000808673ffffffffffffffffffffffffffffffffffffffff16858760405161141191906119b6565b60006040518083038185875af1925050503d806000811461144e576040519150601f19603f3d011682016040523d82523d6000602084013e611453565b606091505b5091509150611463828286611482565b92505050949350505050565b600080823b905060008111915050919050565b60608315611492578290506114e2565b6000835111156114a55782518084602001fd5b816040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016114d99190611a2c565b60405180910390fd5b9392505050565b604051806080016040528060008152602001600081526020016000151581526020016000151581525090565b6000813590506115248161217c565b92915050565b60008083601f84011261153c57600080fd5b8235905067ffffffffffffffff81111561155557600080fd5b60208301915083602082028301111561156d57600080fd5b9250929050565b60008083601f84011261158657600080fd5b8235905067ffffffffffffffff81111561159f57600080fd5b6020830191508360208202830111156115b757600080fd5b9250929050565b60008083601f8401126115d057600080fd5b8235905067ffffffffffffffff8111156115e957600080fd5b60208301915083602082028301111561160157600080fd5b9250929050565b60008135905061161781612193565b92915050565b60008151905061162c81612193565b92915050565b600081519050611641816121aa565b92915050565b60006020828403121561165957600080fd5b600061166784828501611515565b91505092915050565b6000806000806000806060878903121561168957600080fd5b600087013567ffffffffffffffff8111156116a357600080fd5b6116af89828a0161152a565b9650965050602087013567ffffffffffffffff8111156116ce57600080fd5b6116da89828a016115be565b9450945050604087013567ffffffffffffffff8111156116f957600080fd5b61170589828a01611574565b92509250509295509295509295565b60006020828403121561172657600080fd5b600061173484828501611608565b91505092915050565b60006020828403121561174f57600080fd5b600061175d8482850161161d565b91505092915050565b60006020828403121561177857600080fd5b600061178684828501611632565b91505092915050565b61179881611d7e565b82525050565b6117a781611d90565b82525050565b60006117b882611c37565b6117c28185611c4d565b93506117d2818560208601611dea565b80840191505092915050565b6117e781611dc6565b82525050565b60006117f882611c42565b6118028185611c58565b9350611812818560208601611dea565b61181b81611ec4565b840191505092915050565b6000611833602683611c58565b915061183e82611ed5565b604082019050919050565b6000611856602d83611c58565b915061186182611f24565b604082019050919050565b6000611879602683611c58565b915061188482611f73565b604082019050919050565b600061189c601283611c58565b91506118a782611fc2565b602082019050919050565b60006118bf602083611c58565b91506118ca82611feb565b602082019050919050565b60006118e2603d83611c58565b91506118ed82612014565b604082019050919050565b6000611905601d83611c58565b915061191082612063565b602082019050919050565b6000611928602983611c58565b91506119338261208c565b604082019050919050565b600061194b601183611c58565b9150611956826120db565b602082019050919050565b600061196e602a83611c58565b915061197982612104565b604082019050919050565b6000611991600f83611c58565b915061199c82612153565b602082019050919050565b6119b081611dbc565b82525050565b60006119c282846117ad565b915081905092915050565b60006020820190506119e2600083018461178f565b92915050565b60006040820190506119fd600083018561178f565b611a0a60208301846119a7565b9392505050565b6000602082019050611a2660008301846117de565b92915050565b60006020820190508181036000830152611a4681846117ed565b905092915050565b60006020820190508181036000830152611a6781611826565b9050919050565b60006020820190508181036000830152611a8781611849565b9050919050565b60006020820190508181036000830152611aa78161186c565b9050919050565b60006020820190508181036000830152611ac78161188f565b9050919050565b60006020820190508181036000830152611ae7816118b2565b9050919050565b60006020820190508181036000830152611b07816118d5565b9050919050565b60006020820190508181036000830152611b27816118f8565b9050919050565b60006020820190508181036000830152611b478161191b565b9050919050565b60006020820190508181036000830152611b678161193e565b9050919050565b60006020820190508181036000830152611b8781611961565b9050919050565b60006020820190508181036000830152611ba781611984565b9050919050565b6000602082019050611bc360008301846119a7565b92915050565b6000604082019050611bde60008301856119a7565b611beb602083018461179e565b9392505050565b6000608082019050611c0760008301876119a7565b611c1460208301866119a7565b611c21604083018561179e565b611c2e606083018461179e565b95945050505050565b600081519050919050565b600081519050919050565b600081905092915050565b600082825260208201905092915050565b6000611c7482611dbc565b9150611c7f83611dbc565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff03821115611cb457611cb3611e66565b5b828201905092915050565b6000611cca82611dbc565b9150611cd583611dbc565b925082611ce557611ce4611e95565b5b828204905092915050565b6000611cfb82611dbc565b9150611d0683611dbc565b9250817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615611d3f57611d3e611e66565b5b828202905092915050565b6000611d5582611dbc565b9150611d6083611dbc565b925082821015611d7357611d72611e66565b5b828203905092915050565b6000611d8982611d9c565b9050919050565b60008115159050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b6000611dd182611dd8565b9050919050565b6000611de382611d9c565b9050919050565b60005b83811015611e08578082015181840152602081019050611ded565b83811115611e17576000848401525b50505050565b6000611e2882611dbc565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff821415611e5b57611e5a611e66565b5b600182019050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000601f19601f8301169050919050565b7f4f776e61626c653a206e6577206f776e657220697320746865207a65726f206160008201527f6464726573730000000000000000000000000000000000000000000000000000602082015250565b7f596f752063616e74206368616e6765207265766f6361626c6520626f6f6c206160008201527f6c72656164792073657474656400000000000000000000000000000000000000602082015250565b7f416464726573733a20696e73756666696369656e742062616c616e636520666f60008201527f722063616c6c0000000000000000000000000000000000000000000000000000602082015250565b7f4e6f7468696e6720746f2072656c656173650000000000000000000000000000600082015250565b7f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572600082015250565b7f796f752063616e74206772616e74206d6f7265207468616e20796f752061637460008201527f75616c6c79206861766520617661696c61626c6520746f206772616e74000000602082015250565b7f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000600082015250565b7f416c6c20617267756d656e7473206e6565647320746f2062652074686520736160008201527f6d65206c656e6774680000000000000000000000000000000000000000000000602082015250565b7f43616e6e6f74206265207265766f6b6564000000000000000000000000000000600082015250565b7f5361666545524332303a204552433230206f7065726174696f6e20646964206e60008201527f6f74207375636365656400000000000000000000000000000000000000000000602082015250565b7f416c7265616479207265766f6b65640000000000000000000000000000000000600082015250565b61218581611d7e565b811461219057600080fd5b50565b61219c81611d90565b81146121a757600080fd5b50565b6121b381611dbc565b81146121be57600080fd5b5056fea2646970667358221220b60bceb5b98efde30b232e8ae94f2c9f963f6e5cf1c63eaa6926b86c8b53bd7b64736f6c63430008030033";

export class TokenVestingController__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _start: BigNumberish,
    _cliff: BigNumberish,
    _duration: BigNumberish,
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<TokenVestingController> {
    return super.deploy(
      _start,
      _cliff,
      _duration,
      _token,
      overrides || {}
    ) as Promise<TokenVestingController>;
  }
  getDeployTransaction(
    _start: BigNumberish,
    _cliff: BigNumberish,
    _duration: BigNumberish,
    _token: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _start,
      _cliff,
      _duration,
      _token,
      overrides || {}
    );
  }
  attach(address: string): TokenVestingController {
    return super.attach(address) as TokenVestingController;
  }
  connect(signer: Signer): TokenVestingController__factory {
    return super.connect(signer) as TokenVestingController__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): TokenVestingControllerInterface {
    return new utils.Interface(_abi) as TokenVestingControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): TokenVestingController {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as TokenVestingController;
  }
}