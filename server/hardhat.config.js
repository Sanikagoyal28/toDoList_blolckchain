require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks:{
    rinkeby:{
      url:process.env.ALCHEMY_RINKEBY_URL,
      accounts:[process.env.ACCOUNT_PRIVATE_KEY]
    }
  }
};
