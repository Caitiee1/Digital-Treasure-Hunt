$(".button").click(function(){
    $(".Text1").text("Move your mouse over the picture");
});
$(".lilbaby").mouseenter(function(){
    $(".lilbaby").attr("src", "https://www.sportsbusinessdaily.com/-/media/Images/Daily/2018/07/30/OWL.ashx?mw=768&hash=DCEC560E59D985C98867B40521C7DE1E386FF01E");
    $(".Text1").text("Double click the header");
});
$("h1").dblclick(function(){
    $(".tickets").show();
    $(".Text1").text("Double click the button");
});
$(".button").dblclick(function(){
    $(".tickets").hide();
    $(".lilbaby").hide();
    $(".button").hide();
    $("h1").hide();
    $(".Text1").hide();
    $(".concert").show();
    
});
$(".concert").hide();
