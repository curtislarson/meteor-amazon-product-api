Package.describe({
  name: 'quackware:amazon-product-api',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'Meteor smart package for amazon product api',
  // URL to the Git repository containing the source code for this package.
  git: 'https://www.github.com/quackware/meteor-amazon-product-api',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Npm.depends({
  "amazon-product-api": "0.3.5"
});

Package.onUse(function(api) {
  api.versionsFrom('1.2.1');

  api.export("AmazonProductApi");

  api.addFiles(["server/amazon-product-api.js"], "server");
});