$("h1").on("mouseover", function(){
  $("h1").css("color", "yellow");
  $("h1").css("fontSize", "60px");
});

$("button").on("click", function(){
  $("h1").fadeToggle();
  $("h1").css("color", "blue");
  $("h1").css("fontSize", "30px");
});
