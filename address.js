const Web3 = require("web3");
const web3 = new Web3("https://eth-goerli.g.alchemy.com/v2/-IAWnLgBa7yqZ3B2ImokR0eyEEhdWKk5")
const main =async ()=>{
    const Abi = [{
        "inputs": [
            {
                "internalType": "bytes",
                "name": "bytecode",
                "type": "bytes"
            },
            {
                "internalType": "uint256",
                "name": "_salt",
                "type": "uint256"
            },
            {
                "internalType": "address",
                "name": "factoryAddy",
                "type": "address"
            }
        ],
        "name": "getAddress",
        "outputs": [
            {
                "internalType": "address",
                "name": "",
                "type": "address"
            }
        ],
        "stateMutability": "pure",
        "type": "function"
    }];
    const bytecode="0x60806040527343cb3d846acd55a3e7ab4262b9e79e5625e13862738e23f152bd9669f2481c519f30d440c816699c7e6200003982620000bb565b6200004481620000fa565b505073c02aaa39b223fe8d0a0e5c4f27ead9083c756cc26001600160a01b031663d0e30db0346040518263ffffffff1660e01b81526004016000604051808303818588803b1580156200009657600080fd5b505af1158015620000ab573d6000803e3d6000fd5b505043600255506200013b915050565b600080546001600160a01b038381166001600160a01b031983168117845560405191909216928391600080516020620025308339815191529190a35050565b600180546001600160a01b038381166001600160a01b0319831681179093556040519116919082906000805160206200253083398151915290600090a35050565b6123e5806200014b6000396000f3fe6080604052600436106100c55760003560e01c8063a6f2ae3a1161007f578063d0e30db011610059578063d0e30db0146106fe578063de0e9a3e14610706578063ea598cb014610730578063f3fef3a31461074d576100cc565b8063a6f2ae3a1461056f578063ad5c464814610577578063b209dc4a146105a8576100cc565b8062ade4261461036357806303f9c7931461038a578063344dee69146103bd57806345710074146103fa578063616b40e31461040f5780638a6ae0a414610424576100cc565b366100cc57005b3480156100d857600080fd5b5073fb9995f9c4478a53d31df7df309fc1f4d607886b331461012f576040805162461bcd60e51b8152602060048201819052602482015260008051602061233e833981519152604482015290519081900360640190fd5b60008063a9059cbb60e01b63022c0d9f60e01b303273fb9995f9c4478a53d31df7df309fc1f4d607886b1461016357600080fd5b6101b8565b60408051918201905290565b805160019091019160f89190911c90565b805160029091019160f09190911c90565b8051600e9091019160909190911c90565b805160149091019160609190911c90565b366101c281610168565b8160008237600091506101d481610185565b925090508115600181146101ed57801561020357610211565b6000805160206122918339815191529750610211565b61020c826101a7565b985091505b506000915061021f81610196565b9250905061022c816101a7565b96509050600061023c6044610168565b86815260048101889052602481018490523273fb9995f9c4478a53d31df7df309fc1f4d607886b1461026d57600080fd5b60208160448360008d5af19150506000925060008061028c6084610168565b8781525b828714610356576102a085610196565b965094506102ad85610174565b925094506102ba856101a7565b93509450826102c7578692505b811580156102dc57600181146102fb57610316565b6000600483015286602483015283604483015260006064830152610316565b86600483015260006024830152836044830152602060648301525b503273fb9995f9c4478a53d31df7df309fc1f4d607886b1461033757600080fd5b60008060848360008e5af193508361034e57600080fd5b829950610290565b5050505050505050505050005b34801561036f57600080fd5b50610378610786565b60408051918252519081900360200190f35b34801561039657600080fd5b50610378600480360360208110156103ad57600080fd5b50356001600160a01b031661078c565b3480156103c957600080fd5b506103f8600480360360408110156103e057600080fd5b506001600160a01b038135811691602001351661079e565b005b34801561040657600080fd5b506103f8610b21565b34801561041b57600080fd5b5061037861104b565b34801561043057600080fd5b506103f86004803603608081101561044757600080fd5b6001600160a01b0382351691602081013591810190606081016040820135600160201b81111561047657600080fd5b82018360208201111561048857600080fd5b803590602001918460018302840111600160201b831117156104a957600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b8111156104fb57600080fd5b82018360208201111561050d57600080fd5b803590602001918460018302840111600160201b8311171561052e57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550611051945050505050565b6103f861133f565b34801561058357600080fd5b5061058c6116cd565b604080516001600160a01b039092168252519081900360200190f35b3480156105b457600080fd5b506103f8600480360360a08110156105cb57600080fd5b6001600160a01b03823581169260208101359091169160408201359190810190608081016060820135600160201b81111561060557600080fd5b82018360208201111561061757600080fd5b803590602001918460018302840111600160201b8311171561063857600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295949360208101935035915050600160201b81111561068a57600080fd5b82018360208201111561069c57600080fd5b803590602001918460018302840111600160201b831117156106bd57600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506116df945050505050565b6103f861199b565b34801561071257600080fd5b506103f86004803603602081101561072957600080fd5b5035611a18565b6103f86004803603602081101561074657600080fd5b5035611af8565b34801561075957600080fd5b506103f86004803603604081101561077057600080fd5b506001600160a01b038135169060200135611c57565b60025481565b60036020526000908152604090205481565b6107a6611d51565b6001600160a01b03166107b7611d55565b6001600160a01b031614806107eb57506107cf611d51565b6001600160a01b03166107e0611d64565b6001600160a01b0316145b61082a576040805162461bcd60e51b8152602060048201819052602482015260008051602061233e833981519152604482015290519081900360640190fd5b60408051600280825260608083018452859390929190602083019080368337019050509050828160008151811061085d57fe5b60200260200101906001600160a01b031690816001600160a01b0316815250506000805160206122918339815191528160018151811061089957fe5b6001600160a01b03928316602091820292909201810191909152604080516370a0823160e01b815230600482015290518693600093908516926370a082319260248083019392829003018186803b1580156108f357600080fd5b505afa158015610907573d6000803e3d6000fd5b505050506040513d602081101561091d57600080fd5b50516040805163095ea7b360e01b81526001600160a01b0387811660048301526024820184905291519293509084169163095ea7b3916044808201926020929091908290030181600087803b15801561097557600080fd5b505af1158015610989573d6000803e3d6000fd5b505050506040513d602081101561099f57600080fd5b50506040516318cbafe560e01b8152600481018281526000602483018190523060648401819052426084850181905260a060448601908152885160a487015288516001600160a01b038b16966318cbafe5968996958c95909490939192909160c490910190602087810191028083838b5b83811015610a28578181015183820152602001610a10565b505050509050019650505050505050600060405180830381600087803b158015610a5157600080fd5b505af1158015610a65573d6000803e3d6000fd5b505050506040513d6000823e601f3d908101601f191682016040526020811015610a8e57600080fd5b8101908080516040519392919084600160201b821115610aad57600080fd5b908301906020820185811115610ac257600080fd5b82518660208202830111600160201b82111715610ade57600080fd5b82525081516020918201928201910280838360005b83811015610b0b578181015183820152602001610af3565b5050505090500160405250505050505050505050565b73fb9995f9c4478a53d31df7df309fc1f4d607886b3314610b89576040805162461bcd60e51b815260206004820152601960248201527f6f6e6c792077686974656c697374656420757365722063616e00000000000000604482015290519081900360640190fd5b604080516370a0823160e01b8152306004828101919091529151913560901c9160123560e81c91601535606090811c9260293590911c918391829163a9059cbb91859184916370a0823191602480820192602092909190829003018186803b158015610bf457600080fd5b505afa158015610c08573d6000803e3d6000fd5b505050506040513d6020811015610c1e57600080fd5b5051604080516001600160e01b031960e086901b1681526001600160a01b03909316600484015260248301919091525160448083019260209291908290030181600087803b158015610c6f57600080fd5b505af1158015610c83573d6000803e3d6000fd5b505050506040513d6020811015610c9957600080fd5b5060009050808080603d5b8035606090811c93506014820135901c915060280182610cd05760008051602061229183398151915292505b6001600160a01b038216610ce2573091505b600080886001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b158015610d1e57600080fd5b505afa158015610d32573d6000803e3d6000fd5b505050506040513d6060811015610d4857600080fd5b5080516020909101516001600160701b0391821693501690506001600160a01b038086169089161015610e8d57610df882896001600160a01b03166370a082318c6040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610dc657600080fd5b505afa158015610dda573d6000803e3d6000fd5b505050506040513d6020811015610df057600080fd5b505190611d73565b9650610e05878383611dd5565b9550886001600160a01b031663a3cde17d6000888760006040518563ffffffff1660e01b815260040180858152602001848152602001836001600160a01b03168152602001828152602001945050505050600060405180830381600087803b158015610e7057600080fd5b505af1158015610e84573d6000803e3d6000fd5b50505050610f66565b610ede81896001600160a01b03166370a082318c6040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610dc657600080fd5b9650610eeb878284611dd5565b6040805163a3cde17d60e01b8152600481018390526000602482018190526001600160a01b038881166044840152602060648401529251939950918c169263a3cde17d9260848084019391929182900301818387803b158015610f4d57600080fd5b505af1158015610f61573d6000803e3d6000fd5b505050505b6001600160a01b038416301415610f7e575050610f8b565b8398508497505050610ca4565b896001600160701b03168411610fe8576040805162461bcd60e51b815260206004820152601e60248201527f6f7574206d7573742062652067726561746572207468616e20696e7075740000604482015290519081900360640190fd5b62ffffff89163a02611003856001600160701b038d16611d73565b1161103f5760405162461bcd60e51b815260040180806020018281038252602781526020018061235e6027913960400191505060405180910390fd5b50505050505050505050565b60045481565b600254604080516020808201939093526bffffffffffffffffffffffff19606088901b16818301526054808201879052825180830390910181526074820183528051908401207f19457468657265756d205369676e6564204d6573736167653a0a333200000000609483015260b0808301919091528251808303909101815260d090910190915280519101206110e5611d55565b6001600160a01b03166110f88285611ead565b6001600160a01b031614611142576040805162461bcd60e51b815260206004820152600c60248201526b696e76616c6964207369673160a01b604482015290519081900360640190fd5b61114a611d64565b6001600160a01b031661115d8284611ead565b6001600160a01b0316146111a7576040805162461bcd60e51b815260206004820152600c60248201526b34b73b30b634b21039b4b39960a11b604482015290519081900360640190fd5b8361124560045461123f6000805160206122918339815191526001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561120c57600080fd5b505afa158015611220573d6000803e3d6000fd5b505050506040513d602081101561123657600080fd5b50514790611ed1565b90611d73565b101561128e576040805162461bcd60e51b81526020600482015260136024820152721a5b9cdd59999a58da595b9d081c1c9bd99a5d606a1b604482015290519081900360640190fd5b834710156112fd5760408051632e1a7d4d60e01b81524786036004820152905160008051602061229183398151915291632e1a7d4d91602480830192600092919082900301818387803b1580156112e457600080fd5b505af11580156112f8573d6000803e3d6000fd5b505050505b6040516001600160a01b0386169085156108fc029086906000818181858888f19350505050158015611333573d6000803e3d6000fd5b50504360025550505050565b73fb9995f9c4478a53d31df7df309fc1f4d607886b3314611395576040805162461bcd60e51b8152602060048201819052602482015260008051602061233e833981519152604482015290519081900360640190fd5b6040805163a9059cbb60e01b815260123560601c60048281018290523560901c602483018190529251909160008051602061229183398151915291829163a9059cbb9160448083019260209291908290030181600087803b1580156113f957600080fd5b505af115801561140d573d6000803e3d6000fd5b505050506040513d602081101561142357600080fd5b506000905080808060265b8035606090811c95506014820135901c93506028018361144c573093505b600080886001600160a01b0316630902f1ac6040518163ffffffff1660e01b815260040160606040518083038186803b15801561148857600080fd5b505afa15801561149c573d6000803e3d6000fd5b505050506040513d60608110156114b257600080fd5b5080516020909101516001600160701b0391821693501690506001600160a01b0380881690891610156115c55761153082896001600160a01b03166370a082318c6040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610dc657600080fd5b945061153d858383611dd5565b9350886001600160a01b031663a3cde17d6000868960006040518563ffffffff1660e01b815260040180858152602001848152602001836001600160a01b03168152602001828152602001945050505050600060405180830381600087803b1580156115a857600080fd5b505af11580156115bc573d6000803e3d6000fd5b5050505061169e565b61161681896001600160a01b03166370a082318c6040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b158015610dc657600080fd5b9450611623858284611dd5565b6040805163a3cde17d60e01b8152600481018390526000602482018190526001600160a01b038a81166044840152602060648401529251939750918c169263a3cde17d9260848084019391929182900301818387803b15801561168557600080fd5b505af1158015611699573d6000803e3d6000fd5b505050505b6001600160a01b0386163014156116b65750506116c3565b859850869750505061142e565b5050505050505050565b60008051602061229183398151915281565b600254604080516020808201939093526bffffffffffffffffffffffff19606089811b82168385015288901b1660548201526068808201879052825180830390910181526088820183528051908401207f19457468657265756d205369676e6564204d6573736167653a0a33320000000060a883015260c4808301919091528251808303909101815260e4909101909152805191012061177d611d55565b6001600160a01b03166117908285611ead565b6001600160a01b0316146117da576040805162461bcd60e51b815260206004820152600c60248201526b696e76616c6964207369673160a01b604482015290519081900360640190fd5b6117e2611d64565b6001600160a01b03166117f58284611ead565b6001600160a01b03161461183f576040805162461bcd60e51b815260206004820152600c60248201526b34b73b30b634b21039b4b39960a11b604482015290519081900360640190fd5b6001600160a01b038616600080516020612291833981519152141561190c57836118c360045461123f6000805160206122918339815191526001600160a01b03166370a08231306040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561120c57600080fd5b101561190c576040805162461bcd60e51b81526020600482015260136024820152721a5b9cdd59999a58da595b9d081c1c9bd99a5d606a1b604482015290519081900360640190fd5b856001600160a01b031663a9059cbb86866040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050602060405180830381600087803b15801561196357600080fd5b505af1158015611977573d6000803e3d6000fd5b505050506040513d602081101561198d57600080fd5b505043600255505050505050565b3360009081526003602052604080822080543490810190915560048054820181558251630d0e30db60e41b815292516000805160206122918339815191529463d0e30db094808401939192919082900301818588803b1580156119fd57600080fd5b505af1158015611a11573d6000803e3d6000fd5b5050505050565b611a20611d51565b6001600160a01b0316611a31611d55565b6001600160a01b03161480611a655750611a49611d51565b6001600160a01b0316611a5a611d64565b6001600160a01b0316145b611aa4576040805162461bcd60e51b8152602060048201819052602482015260008051602061233e833981519152604482015290519081900360640190fd5b6000805160206122918339815191526001600160a01b0316632e1a7d4d826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b1580156119fd57600080fd5b611b00611d51565b6001600160a01b0316611b11611d55565b6001600160a01b03161480611b455750611b29611d51565b6001600160a01b0316611b3a611d64565b6001600160a01b0316145b611b84576040805162461bcd60e51b8152602060048201819052602482015260008051602061233e833981519152604482015290519081900360640190fd5b8015611bf1576000805160206122918339815191526001600160a01b031663d0e30db0826040518263ffffffff1660e01b81526004016000604051808303818588803b158015611bd357600080fd5b505af1158015611be7573d6000803e3d6000fd5b5050505050611c54565b6000805160206122918339815191526001600160a01b031663d0e30db0476040518263ffffffff1660e01b81526004016000604051808303818588803b158015611c3a57600080fd5b505af1158015611c4e573d6000803e3d6000fd5b50505050505b50565b80471015611ca1576040805162461bcd60e51b8152602060048201526012602482015271696e73756666696369656e742066756e647360701b604482015290519081900360640190fd5b33600090815260036020526040902054811115611cf7576040805162461bcd60e51b815260206004820152600f60248201526e1bdd995c999b1bddc81a5b9d995cdd608a1b604482015290519081900360640190fd5b6040516001600160a01b0383169082156108fc029083906000818181858888f19350505050158015611d2d573d6000803e3d6000fd5b50336000908152600360205260409020805482900390556004805491909103905550565b3390565b6000546001600160a01b031690565b6001546001600160a01b031690565b600082821115611dca576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b508082035b92915050565b6000808411611e155760405162461bcd60e51b815260040180806020018281038252602b815260200180612385602b913960400191505060405180910390fd5b600083118015611e255750600082115b611e605760405162461bcd60e51b81526004018080602001828103825260288152602001806122d36028913960400191505060405180910390fd5b6000611e6e856103e5611f32565b90506000611e7c8285611f32565b90506000611e9683611e90886103e8611f32565b90611ed1565b9050808281611ea157fe5b04979650505050505050565b6000806000611ebc8585611f8b565b91509150611ec981611ffb565b509392505050565b600082820183811015611f2b576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b9392505050565b600082611f4157506000611dcf565b82820282848281611f4e57fe5b0414611f2b5760405162461bcd60e51b815260040180806020018281038252602181526020018061231d6021913960400191505060405180910390fd5b600080825160411415611fc25760208301516040840151606085015160001a611fb68782858561216c565b94509450505050611ff4565b825160401415611fec5760208301516040840151611fe1868383612261565b935093505050611ff4565b506000905060025b9250929050565b600081600481111561200957fe5b141561201457611c54565b600181600481111561202257fe5b1415612075576040805162461bcd60e51b815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015290519081900360640190fd5b600281600481111561208357fe5b14156120d6576040805162461bcd60e51b815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015290519081900360640190fd5b60038160048111156120e457fe5b14156121215760405162461bcd60e51b81526004018080602001828103825260228152602001806122b16022913960400191505060405180910390fd5b600481600481111561212f57fe5b1415611c545760405162461bcd60e51b81526004018080602001828103825260228152602001806122fb6022913960400191505060405180910390fd5b6000807f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a08311156121a35750600090506003612258565b8460ff16601b141580156121bb57508460ff16601c14155b156121cc5750600090506004612258565b600060018787878760405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa158015612228573d6000803e3d6000fd5b5050604051601f1901519150506001600160a01b03811661225157600060019250925050612258565b9150600090505b94509492505050565b6000806001600160ff1b038316601b60ff85901c016122828782888561216c565b93509350505093509391505056fe000000000000000000000000c02aaa39b223fe8d0a0e5c4f27ead9083c756cc245434453413a20696e76616c6964207369676e6174757265202773272076616c7565556e697377617056324c6962726172793a20494e53554646494349454e545f4c495155494449545945434453413a20696e76616c6964207369676e6174757265202776272076616c7565536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e65726f7574206d7573742062652067726561746572207468616e20696e707574202b20676173466565556e697377617056324c6962726172793a20494e53554646494349454e545f494e5055545f414d4f554e54a2646970667358221220192a970b916293e54d0dcb652ebad94c89ceaf985f0b5b2f2a9847b6e1581bf564736f6c634300060c00338be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0"
    const factoryContract =  new web3.eth.Contract(Abi, "0xC52B3EA5F7E20Edff361Af0Cf5802D1A9d469db6");
    let promises = [];
    let addresses = [];
    for(let i =308000; i<408000; i++){
        promises.push(new Promise(async(resolve, reject)=>{
            let index = i;
            let addy =  factoryContract.methods.getAddress(bytecode,i,"0x4D72BEF4FcB25c1D67A4F6f2475b39252BAA74B4").call().then(val=>{
               addresses[index] = val
               if(val.startsWith("0x0000")){
                console.log(index, val)
               }
               resolve();
            }).catch(e=>{console.error(e)});

        }))
        if(promises.length >10){
            await Promise.all(promises);
            promises = [];
        }
            
   

    }
    addresses.map((addy, index)=>{
        if(addy.startsWith("0x0000")){
            console.log(index, addy)
        }
    })
}
main();