const path = require("path");
const Pact = require("@pact-foundation/pact").Pact;

global.port = 8080;
global.provider = new Pact({
  port: global.port,
  cors: true,
  log: path.resolve(process.cwd(), "logs", "mockserver-integration.log"),
  loglevel: "debug",
  dir: path.resolve(process.cwd(), "pacts"),
  spec: 2,
  // TODO: set this back to update only if you know what you're doing! (for parallel stuff) :)
  pactfileWriteMode: "overwrite",
  consumer: "react-consumer",
  provider: "node-provider",
  host: "127.0.0.1"
});
