require.config({
  baseUrl: "/",
  urlArgs: 'cb=' + Math.random(),
  paths: {
    jquery: 'public/js/libs/jquery',
    'jasmine': '/jasmine/lib/jasmine-2.0.0/jasmine',
    'jasmine-html': '/jasmine/lib/jasmine-2.0.0/jasmine-html',
    'boot': '/jasmine/lib/jasmine-2.0.0/boot',
    'testem': '/testem',
    'spec-helper' : '/jasmine/spec/js-spec/SpecHelper',
    'jasmine-jquery': '/jasmine/lib/jasmine-jquery',
    'custom-matchers': '/jasmine/lib/custom-jasmine-jquery-matchers'

  },
  shim: {
    modernizr: {
      exports: 'Modernizr'
    },
    'jasmine': {
      exports: 'window.jasmineRequire'
    },
    'jasmine-html': {
      deps: ['jasmine'],
      exports: 'window.jasmineRequire'
    },
    'custom-matchers' : {
      deps: ['jquery', 'boot']
    },
    'jasmine-jquery' : {
      deps: ['jquery', 'boot']
    },
    'boot': {
      deps: ['jasmine', 'jasmine-html'],
      exports: 'window.jasmineRequire'
    },
    'testem': {
      deps:['boot']
    }
  }

});

require(['testem', 'jasmine-jquery', 'spec-helper', 'custom-matchers'], function() {

  jasmine.getFixtures().fixturesPath = 'fixtures/rtl';
  require({ paths: { spec: "/jasmine/spec" } }, [
      
      "spec/css-specs/mainSpec"

  ], function () {
    window.onload();
  });
});
