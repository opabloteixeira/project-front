$(document).ready(function(){

    $(".menu-mobile").hide();
    $("#client1").hide();
	$("#client2").hide();
	$("#client3").hide();
	$("#client4").hide();

    $('#flag-menu').click(function() { 	// hide + show menu
		$(".menu-mobile").slideToggle();
    });
    
    $('#flag-menu-x').click(function() { // hide + show menu
		$(".menu-mobile").slideToggle();
    });
    


    $('#img1').click(function() {	
		$("#client1").show("fast");
		// $("#video").hide("fast");
	});
});