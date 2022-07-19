'use strict';

const maybePolyfillTypeScriptBlueprints = require('../-maybe-polyfill-typescript-blueprints');

module.exports = {
  description: 'Generates a controller.',

  fileMapTokens(options) {
    return {
      __root__() {
        return 'app/ui';
      },
      __path__() {
        return 'routes';
      }
    };
  },
};
