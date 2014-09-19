Template.postsList.helpers({
	posts: function(argument) {

		return Posts.find(Session.get("filter") || {}, {sort: {submitted: -1}});

	}
});