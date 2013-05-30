if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    valueAtBit: function(num, bit) {
		var bin = this.convertToBinary(num);
		return Number(bin.substr(bin.length - bit, 1));
    },

    base10: function(str) {
		return parseInt(str, 2);
    },

    convertToBinary: function(num) {
		var ret = num.toString(2);
		while (ret.length < 8) {
			ret = '0' + ret;
		}
		return ret;
    },

    multiply: function(a, b) {
		return Number((a * b).toPrecision(b.toString().length - 2));
    }
  };
});

