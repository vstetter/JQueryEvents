$(document).ready(function () {



$("h1").mouseover(function (event) {
  $(this).css("transform","scale(1.5)");
});
$("h1").mouseout(function (event) {
  $(this).css("transform", "scale(1)");
});


$("h1").on("click", function(event) {
  event.preventDefault();
  $(this).next().fadeIn(5000);
});


$("form").submit(function(event){
    event.preventDefault();
   console.log("submit is working");
   $(this).next().fadeIn(10000);
   console.log(event.target);
 });


$("input").focus (function(){
  $(this).toggleClass("inputBackground");
});



$("figure").eq(0).mouseover(function (event) {
  event.preventDefault();
  $(this).find("img").css("border", "20px solid blue");
});

$("figure").eq(0).mouseout(function (event) {
  event.preventDefault();
  $(this).find("img").css("border", "0px");
});

$("figure").eq(1).on("dblclick", "button", function () {
  alert("May the force be with you!");
});


$("figure").eq(1).mouseover(function (event) {
  event.preventDefault();
  $(this).find("img").css("border", "20px solid yellow");
});

$("figure").eq(1).mouseout(function (event) {
  event.preventDefault();
  $(this).find("img").css("border", "0px");
});


$("figure").eq(2).mouseover(function (event) {
  event.preventDefault();
  $(this).find("img").css("border", "20px solid green");
});

$("figure").eq(2).mouseout(function (event) {
  event.preventDefault();
  $(this).find("img").css("border", "0px");
});


$("figure").eq(3).mouseover(function (event) {
  event.preventDefault();
  $(this).find("img").css("border", "20px solid red");
});

$("figure").eq(3).mouseout(function (event) {
  event.preventDefault();
  $(this).find("img").css("border", "0px");
});

$("figure").eq(4).mouseover(function (event) {
  event.preventDefault();
  $(this).find("img").css("border", "20px solid yellow");
});

$("figure").eq(4).mouseout(function (event) {
  event.preventDefault();
  $(this).find("img").css("border", "0px");
});

$("figure").eq(5).mouseover(function (event) {
  event.preventDefault();
  $(this).find("img").css("border", "20px solid blue");
});

$("figure").eq(5).mouseout(function (event) {
  event.preventDefault();
  $(this).find("img").css("border", "0px");
});



});
