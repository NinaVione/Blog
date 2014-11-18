$(window).load(function(){
pageSize = 3;

showPage = function(page) {
    $(".content").hide();
    $(".content").each(function(n) {
        if (n >= pageSize * (page - 1) && n < pageSize * page)
            $(this).show();
    });        
}
    
showPage(1);

$("#pagin li a").click(function() {
    $("#pagin li a").removeClass("current");
    $(this).addClass("current");
    showPage(parseInt($(this).text())) 
});
    

})