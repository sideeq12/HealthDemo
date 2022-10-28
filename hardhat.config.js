/** @type import('hardhat/config').HardhatUserConfig */

require("@nomiclabs/hardhat-ethers");
require("dotenv").config()

// const { API_URL, API_KEY } = process.env;
const KEY = "0x24015735fc0949a9a335ffbf5714259b246cb7c7ef9cecdac116c88322fe1152"
const API_URL = "https://eth-goerli.g.alchemy.com/v2/d2xO5vFSL2M9bNyfASSXy4rT5-sdv9RX"
module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {},
    goerli: {
       url: API_URL,
       accounts: [KEY]
    }
 },
};
