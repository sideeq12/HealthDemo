const { ethers } = require("hardhat")


async function mainb(){

    const HelloWorld = await ethers.getContractFactory("HelloWorld");
    const hello_world  = await HelloWorld.deploy("testing");

    console.log("My contract address is : ", hello_world.address)

}

mainb()
.then(() => process.exit(0))
.catch(err => {
    console.log("error message : ", err)
    process.exit(1)
})

