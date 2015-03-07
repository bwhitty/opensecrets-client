var assert = require('assert')
  , dotenv = require('dotenv');

var OpenSecretsClient = require('../lib/open_secrets_client');

describe('API client', function () {
  describe('New client creation', function () {

    afterEach(function () {
      process.env.OPEN_SECRETS_API_KEY = undefined;
    });

    it('should throw an error when creating a new client without an api key', function () {
      assert.throws(function () {
        var client = new OpenSecretsClient();
      }, Error);
    });

    it('should set client api key when passed in via constructor', function () {
      var fakeApiKey = '123';
      var client = new OpenSecretsClient(fakeApiKey);
      assert.equal(client.apiKey, fakeApiKey);
    });

    it('should set client api key when given via environment variable', function () {
      var fakeApiKey = '123';
      before(function () {
        process.env.OPEN_SECRETS_API_KEY = fakeApiKey;
      });

      var client = new OpenSecretsClient(fakeApiKey);
      assert.equal(client.apiKey, fakeApiKey);
    });

    it('should give precedence to api key passed in via constructor', function () {
      before(function () {
        process.env.OPEN_SECRETS_API_KEY = '123';
      });

      var fakeApiKey = '456';
      var client = new OpenSecretsClient(fakeApiKey);
      assert.equal(client.apiKey, fakeApiKey);
    });
  })
});