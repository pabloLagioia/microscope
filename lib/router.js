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
	this.route("postSubmit", {
		path: "/submit"
	});
});

var requireLogin = function(pause) {
  if (! Meteor.user()) {
    if (Meteor.loggingIn())
      this.render(this.loadingTemplate);
    else
      this.render('accessDenied');
    pause();
  }
};

Router.onBeforeAction('loading');

Router.onBeforeAction(requireLogin, {only: 'postSubmit'});