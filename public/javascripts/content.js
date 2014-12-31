var posts = [];
var onData = 
 function(data) {
  posts = data;
  calculatePages(posts);
  showPage(1);
  showPosts();
 }
var onErr =
 function (req, status, error) {
  console.log('error', errorThrown);
 }

getData();

function getData(){
 	var data;
    $.ajax('/getData', {data: data})
      .done(onData)
      .fail(onErr)
}

getPosts = function(){
	return posts;
}

function addPost(dataTitle, dataContent) {
	var dataId = posts.length;
	var date = new Date();
    var curr_day = date.getDate();
    var curr_month = date.getMonth();
    var curr_year = date.getFullYear();
	var data = {
	  id : dataId,
	  title : dataTitle,
      content : dataContent,
      date : curr_month + "/" + curr_day + "/" + curr_year
    }
    $.post('/addPost', data)
      .done(onData)
      .fail(onErr)
};

function removePost(data) {
	var count = 0;
	while (count < posts.length) {
     if (posts[count].id == data) {
       data = posts[count];
     }
     count = count + 1;
    }
	$.post('/removePost', data)
      .done(onData)
      .fail(onErr)
};

function showPosts() {
	var count = 0;
	var content = '';
	while (count < posts.length) {
		var dataTitle   = posts[count].title;
		var dataContent = posts[count].content;
		var dataDate    = posts[count].date;
		if (count < 3) {
			content = content
					+ '<div class="well well-large content" style="display: block;"><div align="right"><button type="button" class="btn btn-mini" onClick="removePost(' + posts[count].id + ')"><i class="fa fa-times"></i></button></div><h4>'
					+ dataTitle + '</h4><p>' + dataContent 
					+ '</p><br><p>' + dataDate + '</p></div>';
		} else {
			content = content
					+ '<div class="well well-large content" style="display: none;"><div align="right"><button type="button" class="btn btn-mini" onClick="removePost(' + posts[count].id + ')"><i class="fa fa-times"></i></button></div><h4>'
				    + dataTitle + '</h4><p>' + dataContent
					+ '</p><br><p>' + dataDate + '</p></div>';
		}
		count = count + 1;

	}
	document.getElementById('p').innerHTML = content;
};

$(document).ready(function() {
	$("#filter").keyup(function() {
		var filter = $(this).val(), count = 0;
		var input = document.getElementById('filter');
		$(".posts div").each(function() {
			if ($(this).text().search(new RegExp(filter, "i")) < 0) {
				$(this).hide();
			} else {
				$(this).show();
				count++;
			}
			if (input.value.length == 0) {
				var page = $('.current').html();
				showPage(page);
			}
		});

	});
});

function searchPost() {
	var i;
	var str = document.getElementById("datepicker").value;
	if (str == "") {
		swal("Empty field!", "Please pick a date to search", "error");
		return;
	} else {
		for (i = 0; i < posts.length; i++) {
			if (str == posts[i].date) {
				swal(posts[i].title, posts[i].content, "success");
			}
		}
	}
}




