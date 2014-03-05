var miniHash = require('../');

var field = document.body.appendChild(document.createElement('input'));

window.hash = miniHash('!/', function(value) {
  field.value = value;
});

field.addEventListener('input', function() {
  if (this.value === hash.value) return;
  hash.value = this.value;
});
