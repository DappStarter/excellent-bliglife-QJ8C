require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace seek sun sugar shock rescue spawn proof hockey enroll swallow sport'; 
let testAccounts = [
"0xa4d68275e1aaf558af05f9e9f1af33f54d47747ddd736fad1fcf1786028f391a",
"0x7a43948ea86a25502f5a0286147aef167fba714dbe3d21ace9db5a935e256396",
"0x458499a662d2c39eddaf4f1a18f144c0b008facc88bc1d2a5d60bc7e892a8ca3",
"0x677f76d6019d00dc265e7cde57fff466fd9f64961abf0bc3ed3e7fd93652924a",
"0x536d038b7260d6a717d7fc708ad1de6a90508bc80c79d36aeedc9a768f957465",
"0x54855605f24464ed229d216bc8e54bf1014bd164b13a985fc014aca142a210d0",
"0x817c4a5ea4614c262da8112edb1fdf3542346e0f9ff02949488b3af985cb4b74",
"0x760477621a8d4b0954c0c3db15b036bcfb2e8a8c46c25b02e23898b97986d729",
"0x6f2e5a08c6f97a9625e34adb658a0c052db03bf994cb7d32ecf536dd232e3c79",
"0x3819e631e464fbfa15d7088cfddf5e77b6926ab521520c5f93d86d178a18de76"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


