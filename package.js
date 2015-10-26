Package.describe({
  name: 'astrocoders:method-with-scroll',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: '',
  // URL to the Git repository containing the source code for this package.
  git: '',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.0.2');
  api.use([
    'ecmascript',
    'jquery',
    'ui',
    'blaze',
    'templating',
    'underscore',
    'astrocoders:infinite-scroll'
  ]);

  api.addFiles('method-with-scroll.js', 'client');
  api.export('MethodWithScroll', 'client');
});

Package.onTest(function(api) {
  api.use('ecmascript');
  api.use('tinytest');
  api.use('astrocoders:method-with-scroll');
  api.addFiles('method-with-scroll-tests.js');
});
