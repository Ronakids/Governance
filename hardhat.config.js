require("@nomicfoundation/hardhat-toolbox");

const ALCHMY_API_KEY ="AqQ9kCP4zdO6QsTXclgft6JPU1__80vI"
const PRIVATE_KEY = "182a32e59ef7cbaf284065b3b576d0cfb3da2977b1a58cd470a9798b76ba165d"

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.24",
  networks:{
    hardhat: {
      chainId: 1337
    },
    amoy:{
      url: `https://polygon-amoy.g.alchemy.com/v2/${ALCHMY_API_KEY}`,
      accounts: [`0x${PRIVATE_KEY}`]
    }
  }
};