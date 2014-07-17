$(function(){

  $(".nav-expander").click(function(e) {
      e.preventDefault();
      $(".nav").toggleClass("active");
      $(".nav-expander").toggleClass("active");
  });
   
	$("#brand-sidebar ul>li>a.not_product").click(function(){
	 $('#brand-sidebar ul>li>a.all,#brand-sidebar .navbar-default .navbar-nav>li>a.featured').hide();
	 $('#goup').css('bottom','50px');
	});

  $("#brand-sidebar ul>li>a.product,#brand-sidebar .navbar-default .navbar-nav>li>a.featured,#brand-sidebar .navbar-default .navbar-nav>li>a.all").click(function(){
  $('#brand-sidebar ul>li>a.all,#brand-sidebar .navbar-default .navbar-nav>li>a.featured').show();
    $('#goup').css('bottom','-1500px');
  });

});

$(document).ready(function(){
  $('#goup').goup({
    appear: 10,
    scrolltime: 800,
    imgsrc: 'http://goo.gl/VDOdQc',
    width: 72,
    place: 'bottom-right',
    fadein: 500,
    fadeout: 500,
    opacity: 0.5,
    marginX: 2,
    marginY: 6,
  });
 });