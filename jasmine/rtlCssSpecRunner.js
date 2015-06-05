require.config({
  baseUrl: "../assets/javascripts",
  urlArgs: 'cb=' + Math.random(),
  paths: {
    bootstrap: 'libs/bootstrap',
    modernizr: 'libs/modernizr-phantom-notouch',
    enquire: 'libs/enquire',
    iQ: 'libs/iq',
    jquery: 'libs/jquery',
    cookieStorage: 'plugins/jquery.cookie',
    url: 'app_lib/url.parser',
    parseuri: '/assets/javascripts/app_lib/parse.uri',
    soundManager: 'libs/soundmanager',
    history: 'libs/history.adapter.jquery',
    login: 'modules/header/login.module',
    'jasmine': '/jasmine/lib/jasmine-2.0.0/jasmine',
    'jasmine-html': '/jasmine/lib/jasmine-2.0.0/jasmine-html',
    'boot': '/jasmine/lib/jasmine-2.0.0/boot',
    'testem': '/testem',
    'spec-helper' : '/jasmine/spec/js-spec/SpecHelper',
    'jasmine-jquery': '/jasmine/lib/jasmine-jquery',
    'custom-matchers': '/jasmine/lib/custom-jasmine-jquery-matchers'

  },
  shim: {
    enquire: {
      deps: ['jquery'],
      exports: 'enquire'
    },
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
  },

  deps: [
    "analytics",
    "main.app",
    "utils/utils"
  ]
});

require(['testem', 'jasmine-jquery', 'spec-helper', 'custom-matchers'], function() {

  jasmine.getFixtures().fixturesPath = 'spec/rtl-css-spec/fixtures/rtl';
  require({ paths: { spec: "/jasmine/spec" } }, [
      "spec/rtl-css-spec/HeaderSpec",
      "spec/rtl-css-spec/EditorialImageSpec",
      "spec/rtl-css-spec/EditorialHotspotsSpec",
      "spec/rtl-css-spec/EditorialDualViewerSpec",
      "spec/rtl-css-spec/Editorial360ViewerSpec",
      "spec/rtl-css-spec/EditorialFeatureSwitchSpec",
      "spec/rtl-css-spec/EditorialVideoSpec",
      "spec/rtl-css-spec/EditorialSlideshowSpec",
      "spec/rtl-css-spec/EditorialCarouselSpec",
      "spec/rtl-css-spec/EditorialChaptersSpec",
      "spec/rtl-css-spec/PrimaryToutSpec",
      "spec/rtl-css-spec/PrimaryToutProductIntroPlateSpec",

      "spec/rtl-css-spec/PDPSlideShowSpec",
      "spec/rtl-css-spec/ProductDetailsSpec",
      "spec/rtl-css-spec/ProductDetailsLegacySpec",
      "spec/rtl-css-spec/ProductSummarySpec",
      "spec/rtl-css-spec/ProductSingleSpecificationSpec",
      "spec/rtl-css-spec/ProductMultiSpecificationSpec",
      "spec/rtl-css-spec/TertiaryToutSpec",
      "spec/rtl-css-spec/FootNotesSpec",
      "spec/rtl-css-spec/FeatureBenefitsSpec",
      "spec/rtl-css-spec/ProductHighlightsSpec",
      "spec/rtl-css-spec/RelatedProductSpec",
      "spec/rtl-css-spec/GalleryTabsSpec",
      "spec/rtl-css-spec/ProductComparisonSpec",
      "spec/rtl-css-spec/TypeAheadSearchSpec",
      "spec/rtl-css-spec/SearchResultsPageSpec",
      "spec/rtl-css-spec/FootersSpec",
      "spec/rtl-css-spec/AccessoryFinderSpec",
      "spec/rtl-css-spec/ReviewsAndAwardsSpec",
      "spec/rtl-css-spec/ReviewsAndRatingsSpec",

      "spec/rtl-css-spec/OneSonyCarouselSpec"
  ], function () {

    window.onload();
  });
});
