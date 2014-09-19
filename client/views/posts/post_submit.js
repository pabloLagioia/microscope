Template.postSubmit.events = {
	"submit form": function (event) {
		
		event.preventDefault();

		var form = $(event.target);
		
		var post = {
			url: form.find("[name=url]").val(),
			title: form.find("[name=title]").val(),
			message: form.find("[name=message]").val()
		};

		post._id = Posts.insert(post);

		Router.go("postPage", post);

	}
};