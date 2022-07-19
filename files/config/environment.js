/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    namespaceStyles: { all: true },
    modulePrefix: '<%= modulePrefix %>',
    environment: environment,
    rootURL: '/',
    locationType: 'hash',
    EmberENV: {
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
		ENV.contentSecurityPolicy = {
			'default-src': "'none'",
				'script-src': "'self' 'unsafe-inline' 'unsafe-eval' api.ascendary.com",
				'font-src': "'self' data: api.ascendary.com",
				'connect-src': "'self'",
				'img-src': "'self' api.ascendary.com",
				'style-src': "'self' 'unsafe-inline' api.ascendary.com",
				'frame-src': "api.ascendary.com"
		};
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';

    ENV.testing = true;
    ENV.apiEndpoint = '';
  }

  if (environment === 'production') {

  }

  return ENV;
};
