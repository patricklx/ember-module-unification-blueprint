/* eslint-env node */
'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const Funnel = require('broccoli-funnel');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    trees: {
      styles: 'app/ui/styles'
    },
  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  const tree = new Funnel('app/ui', {
    allowEmtpy: true,
    include: ['index.html'],
    destDir: app.name,
    annotation: 'ui to index.html'
  });

  const toArray = app.toArray;
  app.toArray = function() {
    const arr = toArray.call(this);
    arr.push(tree);
    return arr;
  };

  return app.toTree();
};
