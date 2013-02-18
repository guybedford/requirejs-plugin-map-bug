var requirejs = require('requirejs');
var req = requirejs.config({
  baseUrl: 'lib',
  map: {
    '*': {
      'coffee': 'cs'
    }
  }
});
req(['coffee!app/test'], function() {
  console.log('all done');
});
