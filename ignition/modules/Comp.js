const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("CompModule", (m) => {
  const comp = m.contract("Comp", ["0x8A7df3A1a45f153da935708Ce73d4CebEffE0EcE"]);

  return { comp };
});

// Comp contract address : 0x5c7B520f41B12387798AE605372DC1015EDC7E44
