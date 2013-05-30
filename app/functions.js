if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
		return fn.apply(this, arr);
    },

    speak : function(fn, obj) {
		return fn.apply(obj);
    },

    functionFunction : function(str) {
		return function (str2) {
			return str + ', ' + str2;
		};
    },

    makeClosures : function(arr, fn) {
		var ret = []
			, i = arr.length
			, callFn = function (i) {
				return function () {
					return fn(arr[i]);
				}
			};
		for (i; i > 0; i--) {
			ret[i - 1] = callFn(i - 	1);
		}
		return ret;
    },

    partial : function(fn, str1, str2) {
		return function (str3) {
			return fn(str1, str2, str3);
		};
    },

    useArguments : function() {
		var i = arguments.length
			, ret = 0;
		for (i; i > 0; i--) {
			
			ret += arguments[i - 1];
		}
		return ret;
    },

    callIt : function(fn) {
		var args = Array.prototype.slice.call(arguments, 0)
			, fnc = args.shift();
		fnc.apply(this, args);
    },

    partialUsingArguments : function(fn) {
		var args = Array.prototype.slice.call(arguments, 0)
			, fnc = args.shift();
		
		return function () {
			var args2 = Array.prototype.slice.call(arguments, 0);
			args = args.concat(args2);
			return fnc.apply(this, args);
		};
    },

    curryIt : function(fn) {
		return function (a) {
			return function (b) {
				return function (c) {
					return fn(a, b, c);
				};
			};
		};
    }
  };
});
