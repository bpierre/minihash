var test = require('tape');
var createHash = require('../');

function reset(hash) {
  if (hash && hash.stop) hash.stop();
  window.location.hash = '';
}

test('hash update', function(t) {
  t.plan(7);

  var afterUpdate = null;
  var updateValue = '';
  function updated(value) {
    t.equal(value, updateValue);
    if (afterUpdate) afterUpdate();
  }

  var hash = createHash('', updated);

  t.equal(hash.value, '');
  t.equal(window.location.hash, '');

  updateValue = 'foo';
  hash.value = 'foo';
  t.equal(window.location.hash, '#foo');

  updateValue = '';
  hash.value = '';
  hash.value = ''; // should run the update function once

  updateValue = 'bar';
  afterUpdate = function() {
    reset(hash);
  };
  window.location.hash = 'bar';
});

test('no parameters', function(t) {
  t.plan(1);

  var hash = createHash();

  hash.value = 'foo';
  t.equal(window.location.hash, '#foo');

  reset(hash);
});

test('callback first', function(t) {
  t.plan(3);

  var updateValue = '';
  function updated(value) {
    t.equal(value, updateValue);
  }

  var hash = createHash(updated);

  updateValue = 'foo';
  hash.value = 'foo';

  t.equal(window.location.hash, '#foo');

  reset(hash);
});


test('prefix', function(t) {
  t.plan(3);

  var updateValue = '';
  var afterUpdate = null;
  function updated(value) {
    t.equal(value, updateValue);
    if (afterUpdate) setTimeout(function() {
      afterUpdate();
    }, 0);
  }

  var hash = createHash('!/', updated);

  afterUpdate = function() {
    updateValue = 'bar';
    window.location.hash.value = 'bar';
    afterUpdate = function() {
      reset(hash);
    };
  };

  updateValue = 'foo';
  hash.value = 'foo';
});
