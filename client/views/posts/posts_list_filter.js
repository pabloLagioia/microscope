Template.filter.events({
	"keyup input": function(event) {
		
		var input = event.target;
		
		if ( input.value && input.value.length >= 3 ) {
			Session.set("filter", {
				title: {
					$regex: ".*" + input.value + "*."
				}
			}, {
				fields: {
					author: false,
					url: false
				},
				limit: 10
			});
		} else {
			Session.set("filter", {});
		}

	}
});