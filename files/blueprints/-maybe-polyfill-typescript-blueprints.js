const typescriptBlueprintPolyfill = require('ember-cli-typescript-blueprint-polyfill');
const EMBER_TYPESCRIPT_BLUEPRINTS = false;

function canEmitTypeScript() {
  return 'EMBER_TYPESCRIPT_BLUEPRINTS' in process.env
    ? process.env.EMBER_TYPESCRIPT_BLUEPRINTS
    : EMBER_TYPESCRIPT_BLUEPRINTS;
}

module.exports = function (context) {

};
