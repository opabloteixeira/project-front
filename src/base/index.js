
// const $header = document.querySelector(".header");

// const $menuMobile = document.querySelector(".menu-mobile");

// // $menuMobile.style.display = "none";

// const $client1 = document.querySelector("#client1");
// $client1.style.display = "none";

// const $client2 = document.querySelector("#client2");
// $client2.style.display = "none";

// const $client3 = document.querySelector("#client3");
// $client3.style.display = "none";

// const $client4 = document.querySelector("#client4");
// $client4.style.display = "none";


// const $flagMenu = $header.querySelector("#flag-menu");





























 

const $pin = document.querySelector("#pin");

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
  alert(dados.address.city);  
}


// navigator.geolocation.getCurrentPosition(function(posicao) {
//     var url = "http://nominatim.openstreetmap.org/reverse?lat="+posicao.coords.latitude+"&lon="+posicao.coords.longitude+"&format=json&json_callback=preencherDados";

//     var script = document.createElement('script');
//     script.src = url;
//     document.body.appendChild(script);
// });



// function preencherDados(dados) {
//   alert(dados.address.city);  
// }




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
		// $("#video").hide("fast");
    });

    $('.slide2').click(function() {	
		$("#client2").slideToggle("fast");
		// $("#video").hide("fast");
    });

    $('.slide3').click(function() {	
		$("#client3").slideToggle("fast");
		// $("#video").hide("fast");
    });

    $('.slide4').click(function() {	
		$("#client4").slideToggle("fast");
		// $("#video").hide("fast");
    });




    // $('#img1').click(function() {	
    //     alert("sfs");
	// 	$("#client1").show();
	// 	// $("#video").hide("fast");
    // });
    
});


// console.log($menuMobile);








