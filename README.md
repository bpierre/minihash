# minihash

Mini location.hash update system

[![Browser support](https://ci.testling.com/bpierre/minihash.png)](https://ci.testling.com/bpierre/minihash)

[![Build Status](https://travis-ci.org/bpierre/minihash.png?branch=master)](https://travis-ci.org/bpierre/minihash)

## Usage

```js
var minihash = require('minihash');

var hash = minihash('!/', function(value) {
  // Value updated
});

// Update the window.location.hash value
hash.value = 'foo';
```

## License

[MIT](http://pierre.mit-license.org/)
