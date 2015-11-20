var amazon = Npm.require("amazon-product-api");

AmazonProductApi = {};

AmazonProductApi.createClient = function(credentials) {
  var client = amazon.createClient(credentials);
  client.itemSearchSync = Meteor.wrapAsync(client.itemSearch);
  client.itemLookupSync = Meteor.wrapAsync(client.itemLookup);
  client.browseNodeSync = Meteor.wrapAsync(client.browseNode);
  return client;
};