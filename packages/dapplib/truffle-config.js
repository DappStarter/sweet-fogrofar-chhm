require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict robot flock tribe stool dash oven evil grid argue metal gift'; 
let testAccounts = [
"0xfb174376c7c6b599ea98022d2a411a7de690168c1adf6f936cfe0402b97f5fd5",
"0xc374516de067f679e045378b3833fb2fcb23686e9a3dee915f6919c199025664",
"0x280c9664619cb412fe778d687c33f792da267b0e1f1be6b3dbe114c69c144a3c",
"0x937ddafc72adf95bae518f48e33556528c51ceef99cdb3669331450e3169deec",
"0x5c28271befa05c6789177dc79b6293d08b3474cd075d015cf2a2b34baacb8ea2",
"0x5eb04c5b078ba34fbb7f73e9f31c466e379ad0ce2312f134555103b9a9fc3719",
"0x790c34aa46f8964d4b85644ff92829e724e03b4f2590bd9f0bfe088ff1b748fc",
"0xe31e3c0a12dffb58a53e19e6e22d8fa797469d1fc3c585ecd0155283e60b6e68",
"0xd946ea9d65bab7cdac2661ba6d3f2a2671c91d954306268dd8b1e5e72015992f",
"0x6ddc6091f9a44e487028569246dfaf01f1c9262df911e1e38d0451bef38693c6"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

