Template.postSubmit.events = {
	"submit form": function (event) {
		
		event.preventDefault();

		var form = $(event.target);
		
		var post = {
			url: form.find("[name=url]").val(),
			title: form.find("[name=title]").val(),
			message: form.find("[name=message]").val()
		};

		Meteor.call('post', post, function(error, id) {
	      if (error)
	        return alert(error.reason);

	      Router.go('postPage', {_id: id});
	    });

		Router.go("postPage", post);

	}
};