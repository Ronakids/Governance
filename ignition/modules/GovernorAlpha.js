const { buildModule } = require("@nomicfoundation/hardhat-ignition/modules");


module.exports = buildModule("GovernorModule", (m) => {
  const Governor = m.contract("GovernorAlpha", ["0x5583e8eB1420501099A8f869C7a38394Fe7156F1","0x5c7B520f41B12387798AE605372DC1015EDC7E44","0x8A7df3A1a45f153da935708Ce73d4CebEffE0EcE"]);

  return { Governor };
});

// GovernorAlpha contract address : 0x73A26a17D96ECaB33711B23DF5cF7C6f67B55C96
