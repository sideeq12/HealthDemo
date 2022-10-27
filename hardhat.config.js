/** @type import('hardhat/config').HardhatUserConfig */

require("@nomiclabs/hardhat-ethers");
require("dotenv").config()

// const { API_URL, API_KEY } = process.env;
const API_URL = ""
const API_KEY = ""
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    goerli: {
       url: API_URL,
       accounts: [API_KEY]
    }
 },
};
