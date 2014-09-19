Template.search.helpers({
	
	result: function() {

		if ( Session.get("search") ) {

			return Posts.find({
				title: {
					$regex: new RegExp(".*" + Session.get("search") + "*.", "i")
				}
			}, {
				fields: {
					author: false,
					url: false
				},
				limit: 10
			});

		}

		return [];

	}

});

Template.search.events({
	"keyup input": function(event) {
		
		var input = event.target;
		
		if ( input.value && input.value.length >= 3 ) {
			Session.set("search", input.value);
		} else {
			Session.set("search", "");
		}

	}
});