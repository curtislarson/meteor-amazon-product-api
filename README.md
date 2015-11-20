# meteor-amazon-product-api

Meteor smart package for https://github.com/t3chnoboy/amazon-product-api

    meteor add quackware:amazon-product-api

Adds `AmazonProductApi` object to the global scope. Also adds synchronous functions, suffixed with `sync`.

    var client = AmazonProductAPi.createClient({
      awsId: "",
      awsSecret: "",
      awsTag: ""
    });
    var items = client.itemSearchSync({
      director: 'Quentin Tarantino',
      actor: 'Samuel L. Jackson',
      searchIndex: 'DVD',
      audienceRating: 'R',
      responseGroup: 'ItemAttributes,Offers,Images'
    })