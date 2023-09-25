const { network } = require("hardhat")
const { developmentChains, DECIMALS, INITIAL_ANSWER } = require("../helper-hardhat-config")


module.exports = async ({ getNamedAccounts, deployments }) => {
    const { deploy, log } = deployments
    const { deployer } = await getNamedAccounts()
    // if chainId is x use address y


    if (developmentChains.includes(network.name)) {
        log("local network detected!! deploying mocks")
        await deploy("MockV3Aggregator", {
            contract: "MockV3Aggregator",
            from: deployer,
            log: true,
            args: [DECIMALS, INITIAL_ANSWER]


        })
        log("MOCKS DEPLOYED")
        log("-----------------------------------------------------------------------------------------------------------------")
    }
}

module.exports.tags = ["all", "mocks"]