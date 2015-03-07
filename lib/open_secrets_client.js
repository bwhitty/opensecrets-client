var rest   = require('restler')
  , dotenv = require('dotenv')
  , extend = require('extend');

/**
 * Use restler service API to create a simple API wrapper.
 *
 * @see https://www.opensecrets.org/resources/create/api_doc.php
 *
 *@param {String} apiKey Your Opensecrets.org API key. Alternatively you can pass it in via a
 *                       OPEN_SECRETS_API_KEY environment variable (via exports, node cli option,
 *                       or by using a .env file in your project root).
 */
var OpenSecretsClient = rest.service(function(apiKey) {
  this.apiKey = apiKey || process.env.OPEN_SECRETS_API_KEY;

  if (!this.apiKey) {
    throw new Error('Required apiKey parameter is missing');
  }
}, { baseURL: "http://www.opensecrets.org/api/" }, {

  /**
   * GET candidate contributors.
   *
   * @see http://www.opensecrets.org/api/?method=candContrib&output=doc
   *
   * @param {{}} options
   */
  candidateContributors: function (options) {
    return this.get("", extend({
      method: "candContrib",
      output: "json"
    }, options));
  }
});

module.exports = OpenSecretsClient;

