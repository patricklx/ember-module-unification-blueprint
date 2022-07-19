'use strict';

module.exports = {
  description: 'Generates a helper function.',

  fileMapTokens(options) {
    return {
      __root__() {
        return 'app/ui';
      },
      __path__() {
        return 'helpers';
      }
    };
  },
};
