# minihash

Mini location.hash update system

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
