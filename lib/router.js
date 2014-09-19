Router.configure({
	layoutTemplate: "layout",
	loadingTemplate: 'loading',
	waitOn: function() {
		return Meteor.subscribe('posts');
	}
});

Router.map(function() {
	this.route("postsList", {
		path: "/"
	});
	this.route("postPage", {
		path: "/posts/:title",
		data: function() {
			console.log(this.params)
			return Posts.findOne({
				title: this.params.title
			});
		}
	});
});

Router.onBeforeAction("loading");