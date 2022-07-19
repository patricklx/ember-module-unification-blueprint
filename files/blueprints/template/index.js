'use strict';

module.exports = {
  description: 'Generates a template.',
  normalizeEntityName: function (entityName) {
    return entityName.replace(/\.hbs$/, ''); //Prevent generation of ".hbs.hbs" files
  },

  fileMapTokens(options) {
    return {
      __root__() {
        return 'app/ui';
      },
      __path__() {
        return 'components';
      }
    };
  },
};
