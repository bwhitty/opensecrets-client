OpenSecretsClient
=================

A node.js HTTP client wrapper for the Opensecrets.org API.

Opensecrets.org API documentation: www.opensecrets.org/action/api_doc.php

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

Testing
------
This library utilizes ```mocha```, and ```assert``` to run tests. Simply run

```
mocha
```

in the project directory.