const MongoClient = require('mongodb').MongoClient;
const config = require('platformsh-config').config();

module.exports = function (app) {
  const credentials = config.credentials('mongodatabase');
  const mongoClient = MongoClient.connect(config.formattedCredentials('mongodatabase', 'mongodb'))
    .then(client => client.db(credentials['path']));

  app.set('mongoClient', mongoClient);
};
