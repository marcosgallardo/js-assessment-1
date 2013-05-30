if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
		var dfd = $.Deferred();
		
		window.setTimeout(function () {
			dfd.resolve(value);
		}, 5);
		return dfd.promise();
    },

    manipulateRemoteData : function(url) {
		var dfd = $.Deferred();

		$.ajax(url).then(function(data) {
		
			var names = $.map(data.people, function(person) {
			  return person.name;
			});
			dfd.resolve(names.sort());
		});
		return dfd.promise();
    }
  };
});
