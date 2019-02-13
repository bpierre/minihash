# minihash [![Build Status](https://travis-ci.org/bpierre/minihash.png?branch=master)](https://travis-ci.org/bpierre/minihash)

Mini location.hash update system.

<p align="center"><img width="434" height="393" alt="minihash illustration" src="http://scri.ch/lrk-2x.png"></p>

## Usage

```js
var minihash = require('minihash');

var hash = minihash('!/', function(value) {
  // Value updated
});

// Update the window.location.hash value
hash.value = 'foo';
```

## Installation

```
$ npm install minihash
```

## Browser compatibility

IE9+ and modern browsers.

[![Browser support](https://ci.testling.com/bpierre/minihash.png)](https://ci.testling.com/bpierre/minihash)

## License

[MIT](LICENSE)

## Special thanks

Illustration made by [Raphaël Bastide](http://raphaelbastide.com/) with [scri.ch](http://scri.ch/).
