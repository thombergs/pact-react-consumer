const path = require('path');
const PactWeb = require('@pact-foundation/pact-web').PactWeb;

global.port = 8080;
global.provider = new PactWeb({
    port: global.port,
    log: path.resolve(process.cwd(), 'logs', 'mockserver-integration.log'),
    loglevel: 'debug',
    dir: path.resolve(process.cwd(), 'pacts'),
    spec: 2,
    pactfileWriteMode: 'update',
    consumer: 'react-consumer',
    provider: 'node-provider',
    host: '127.0.0.1'
});