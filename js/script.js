$(document).ready(function() {
 	$("button").mouseenter(function(){
 	 $(this).removeClass("makeRed").addClass("makeBorder");

 	});
 	$("button").mouseleave(function(){
 	 $("button").removeClass("makeBorder").addClass("makeRed");

 	});
 	$("button").click(function(){
 	 $("p").slideToggle(2000);
 	});

 	$("button").click(function(){
 	 $("p").hide(2000).show(2000);
 	});
 	
 	$("button").click(function(){
 	 $("p").fadeIn().fadeOut();
 	});


}); 
