/*
$(document).ready(function(){
    $("h1").css("color","red");
})
*/
//do above if load js in header. otherwise just load js at end and will be fine
//$("h1").addClass("big-title margin-50");
//removeClass and hasClass available.

//.text updates text
//$("button").text("NOOOOO");
//.html updates html
//$("button").html("<em>Hi!</em>");

//$("a").attr("href","https://www.yahoo.com");
$("input").keypress(function(event){
    $("h1").text(event.key);
});
$("h1").on("mouseover",function(){
    $("h1").css("color","purple");
});
$("h1").on("mouseout",function(){
    $("h1").css("color","yellow");
});
$("h1").on("click",function(){
    $("h1").css("color","red");
});
$("button").on("click",function(){
    $("h1").css("color","green");
});