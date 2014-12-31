var pageSize = 0;

function showPage (page) {
    $(".content").hide();
    $(".content").each(function(n) {
    	if (n >= pageSize * (page - 1) && n < pageSize * page) {
            $(this).show();
        }
    });
     $("#pagin li a").click(function() {
      $("#pagin li a").removeClass("current");
      $(this).addClass("current");
      showPage(parseInt($(this).text()));
    });  
       
}

function calculatePages (posts) {
 var count = 1;
 var content = '';
 var div = posts.length / 3;
 var zeroDiv = (posts.length - posts.length % 3) / 3;

 if ( div > zeroDiv ) {
    pageSize = zeroDiv + 1;
  } else 
  if (div == zeroDiv) {
 	pageSize = zeroDiv;
  }

 while (count <= pageSize) {
  if (count == 1) {
      content += '<li><a class="current" href="#">'+ count +'</a></li>';
  } else {
      content += '<li><a class="" href="#">' + count + '</a></li>';
  }
  count += 1;
 }
 document.getElementById('pagin').innerHTML = content;
}


    
