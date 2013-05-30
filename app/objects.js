if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
		return fn.apply(obj);
    },

    alterObjects : function(constructor, greeting) {
		constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
		var i
			, ret = [];
		for (i in obj) {
			
			if (i !== 'bop') {
				ret.push(i + ': ' + obj[i]);
			}
		}
		return ret;
    }
  };
});
