'use strict';

const maybePolyfillTypeScriptBlueprints = require('../-maybe-polyfill-typescript-blueprints');

module.exports = {
  shouldTransformTypeScript: true,

  description: 'Generates an instance initializer.',

  fileMapTokens(options) {
    return {
      __root__() {
        return 'app/init';
      }
    };
  },
};
