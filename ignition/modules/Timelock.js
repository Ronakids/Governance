const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("TimeLockModule", (m) => {
  const Timelock = m.contract("Timelock", ["0x8A7df3A1a45f153da935708Ce73d4CebEffE0EcE",345600]);

  return { Timelock };
});

// Timelock contract address : 0x5583e8eB1420501099A8f869C7a38394Fe7156F1
