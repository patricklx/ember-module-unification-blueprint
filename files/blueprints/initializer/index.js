'use strict';

const maybePolyfillTypeScriptBlueprints = require('../-maybe-polyfill-typescript-blueprints');

module.exports = {
  description: 'Generates an initializer.',

  fileMapTokens(options) {
    return {
      __root__() {
        return 'app/init';
      },
      __path__() {
        return 'initializers';
      }
    };
  },
};
