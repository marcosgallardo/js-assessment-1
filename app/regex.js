if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
		var re = /[0-9]+/;
		return re.test(str);
    },

    containsRepeatingLetter : function(str) {
		var re = /([a-z])\1+/i;
		return re.test(str);
    },

    endsWithVowel : function(str) {
		var re = /[aeiou]$/i;
		return re.test(str);
    },

    captureThreeNumbers : function(str) {
		var re = /[0-9]{3}/
			, matches = str.match(re)
			, ret = false;
		if (!!matches && matches.length > 0) {
			ret = matches[0];
		}
		return ret;
    },

    matchesPattern : function(str) {
		var re = /^[0-9]{3}\-[0-9]{3}\-[0-9]{4}$/;
		return re.test(str);
    },
    isUSD : function(str) {
		var re = /^\$([1-9][0-9]{0,2})(\,[0-9]{3})*(\.[0-9]{2})?$/;
		return re.test(str);
    }
  };
});
