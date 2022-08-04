$("h1").addClass("big-tittle ");
$("h1").addClass("margin-50");
$("h1").on("mouseover",function(){
    $("h1").css("color","purple");
})
$("button").click(function(){
    $("h1").css("color","blue");
})
$("input").keypress(function(e){
$("h1").text(e.key);
})