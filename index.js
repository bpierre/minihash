/*
 * Mini location.hash update system
 *
 * Usage:
 *
 * var minihash = require('minihash');
 * var hash = minihash('!/', function(value) {
 *   // Value updated
 * });
 *
 * // Update the location.hash value and trigger the update
 * hash.value = 'foo';
 *
 */

module.exports = function createHash(prefix, update) {

  // Callback first
  if (!update && typeof prefix === 'function') {
    update = prefix;
    prefix = '';
  }

  if (!prefix) prefix = '';
  if (!update) update = function(){};

  var hash = {};
  var _value = getHash(prefix);

  Object.defineProperty(hash, 'value', {
    enumerable: false,
    get: function() {
      return _value;
    },
    set: function(value) {
      if (value === _value) return;
      _value = setHash(prefix, value);
      update(_value);
    }
  });

  var rmHashChange = hashChange(prefix, function() {
    var value = getHash(prefix);
    if (value === _value) return;
    _value = setHash(prefix, value);
    update(_value);
  });

  hash.stop = rmHashChange;

  update(_value);

  return hash;
};

function getHash(prefix) {
  var hash = window.location.hash.slice(1);
  if (hash.indexOf(prefix) !== 0) return hash;
  return hash.slice(prefix.length);
}
function setHash(prefix, value) {
  window.location.hash = prefix + value;
  return value;
}
function hashChange(prefix, cb) {
  window.addEventListener('hashchange', cb);
  return function rmHashChange() {
    window.removeEventListener('hashchange', cb);
  };
}
