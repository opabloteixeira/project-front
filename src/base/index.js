

const $pin = document.querySelector("#pin");
const $tooltip = document.querySelector(".tooltip");



$tooltip.addEventListener( "click", () =>{
    $tooltip.style = "display:none";
});




$pin.addEventListener("click", () =>{

  navigator.geolocation.getCurrentPosition(function(posicao) {
    var url = "http://nominatim.openstreetmap.org/reverse?lat="
              +posicao.coords.latitude+"&lon="+posicao.coords.longitude
              +"&format=json&json_callback=preencherDados";

    var script = document.createElement('script');
    script.src = url;
    document.body.appendChild(script);
  });
});



function preencherDados(dados) {
  const end = `Você está na Cidade: ${dados.address.city} \n Estado: ${dados.address.state}`;
  $tooltip.title = end;
  $tooltip.style = "display:block";
}



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
    
    $('.slide1').click(function() {	
		  $("#client1").slideToggle("fast");
    });

    $('.slide2').click(function() {	
		  $("#client2").slideToggle("fast");
    });

    $('.slide3').click(function() {	
		  $("#client3").slideToggle("fast");
    });

    $('.slide4').click(function() {	
		  $("#client4").slideToggle("fast");
    });
});









