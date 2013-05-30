if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
		var recursiveSearchFiles = function (data, dirName) {
			var ret = []
				, i, t, f
				, dir = dirName + data.dir + '/';
			
			if (typeof data.files === 'object') {
			
				for (i = 0, t = data.files.length; i < t; i++) {
					
					f = data.files[i];
					if (typeof f === 'object') {
						ret = ret.concat(recursiveSearchFiles(f, dir));
					}
					else {
						ret.push(dir + f);
					}
				}
			}
			
			return ret;
		};
		var files = recursiveSearchFiles(data, '')
			, i = files.length
			, f, ret = [];
		for (i; i > 0; i--) {
			
			f = files[i - 1];
			
			if (!dirName || f.indexOf(dirName + '/') > -1) {
				ret.push(f.substr(f.lastIndexOf('/') + 1));
			}
		}
		
		return ret;
    },

    permute: function(arr) {
	
		var tempArr = []
			, ret = [];
		var recursivePermutation = function (arr) {
			var i = arr.length
				, num;
			
			for (i; i > 0; i--) {
				num = arr.pop();
				tempArr.push(num);
				
				if (arr.length == 0) {
					ret.push(tempArr.slice());
				}
				recursivePermutation(arr);
				arr.splice(0, 0, num);
				tempArr.pop();
			}
		}
		recursivePermutation(arr);
		return ret;
    }
  };
});
