OpenSecretsClient
=================

Installing
---------

```
npm install opensecrets-client
```

API
---

candidateContributors(options)
------------------------------

Example usage
-------------
```javascript
var openSecretsClient = require('open_secrets_client');
var client = new openSecretsClient(apiKey);
client.candidateContributors({ /* TODO add example options */, output: 'json'})
  .on('complete', function(result) {
   
   });
```