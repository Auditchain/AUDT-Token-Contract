var Migrations = artifacts.require("./Migrations.sol");
//var DateTime =  artifacts.require("./DateTime.sol");
var Token =  artifacts.require("./Token.sol");

module.exports = async function(deployer) {
  await deployer.deploy(Migrations);
  //await deployer.deploy(DateTime);
 // await deployer.link(DateTime, Token);
  await deployer.deploy(Token);
  
};
