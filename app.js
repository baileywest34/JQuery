

//$
console.log($);
console.log(jQuery);
//selectors

var tags;
tags = $('h2').css('color','navy');

var classes;
classes = $('.section2');
console.log(classes);

var ids;
ids = $('#id-selector')
console.log(ids);

//collection of elements
var allSections;
allSections = $('section').css({'background-color':'black', 'color': 'azure'});

//reacting to dom 
$('.hide').on('click', function() {
  $('.section4').hide();
});
$('.show').on('click', function() {
  $('.section4').show();
});

//append/prepend
$('#append-to').on('click', function() {
  $('#grocery-list').append('<li>added</li>');
});

$('#prepend-to').on('click', function() {
  $('#grocery-list').prepend('<li>added</li>');
});



//attr
$('.btn-attr').on('click', function(){
  $('.cool-pic').attr({"height" : "100px", "width" : "160px"});
});

//content
$('#btn-text').on('click', function(){
  $(".attrText").text("Hello world!");
});

//remove()
$('#remove').on('click', function(){
  $(".section7").remove();
});

//animations
$(document).ready(function(){
  $("#btn-animate").click(function(){
    $("#animate").animate({
      left: '250px',
      opacity: '0.5',
      height: '150px',
      width: '150px'
    });
  });
});


//plugin
$('#imageCalc').calculator({showOn: 'button', 
    buttonImageOnly: true, buttonImage: '$plugin/jquery.calculator.package-2.0.1/calculator.png'});




