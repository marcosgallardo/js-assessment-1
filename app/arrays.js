if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
		return arr.indexOf(item);
    },

    sum : function(arr) {
		var i = arr.length
			, sum = 0;
		for (i; i > 0; i--) {
			sum += arr[i - 1];
		}
		return sum;
    },

    remove : function(arr, item) {
		var i;
		while ((i = this.indexOf(arr, item)) !== -1) {
			arr.splice(i, 1);
		}
		return arr;
    },
    
    removeWithoutCopy : function(arr, item) {
		if (this.indexOf(arr, item) !== -1) {
			this.remove(arr, item);
		}
		return arr;
    },

    append : function(arr, item) {
		arr.push(item);
		return arr;
    },

    truncate : function(arr) {
		arr.pop();
		return arr;
    },

    concat : function(arr1, arr2) {
		return arr1.concat(arr2);
    },

    insert : function(arr, item, index) {
		arr.splice(index, 0, item);
		return arr;
    },

    count : function(arr, item) {
		var i = arr.length
			, ret = 0;
		for (i; i > 0; i--) {
			if (arr[i - 1] === item) {
				ret++;
			}
		}
		return ret;
    },

    duplicates : function(arr) {
		var checkeds = {}
			, ret = []
			, item;
		while (arr.length > 0) {
			
			item = arr[0];
			if (this.count(arr, item) > 1) {
				ret.push(item);
			}
			arr = this.remove(arr, item);
		}
		return ret;
    },

    square : function(arr) {
		var i = arr.length
			, ret = [];
		for (i; i > 0; i--) {
			ret[i -1] = arr[i -1] * arr[i -1];
		}
		return ret;
    },

    findAllOccurrences : function(arr, target) {
		var i = arr.length
			, ret = [];
		for (i; i > 0; i--) {
			if (arr[i -1] == target) {
				ret.push(i -1);
			}
		}
		return ret;
    }
  };
});
