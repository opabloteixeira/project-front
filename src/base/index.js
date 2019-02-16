
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




// function getPosition(){
//   // Verifica se o browser do usuario tem suporte a Geolocation
//   if ( navigator.geolocation ){
//     navigator.geolocation.getCurrentPosition( function( posicao ){
//       console.log( posicao.coords.latitude, posicao.coords.longitude );
//     } );
//   }
// }

// $( document ).ready( function(){
//   getPosition();
// } );


//Check if browser supports W3C Geolocation API
// if (navigator.geolocation) {
//   navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
// } 

// //Get latitude and longitude;
// function successFunction(position) {
//   var lat = position.coords.latitude;
//   var long = position.coords.longitude;
//   console.log(lat+" "+long);
// }

// function errorFunction(){
//   alert("Geocoder failed");
// }





//   var geocoder = 0;

// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(successFunction, errorFunction);
// } 



// //Get the latitude and the longitude;
// function successFunction(position) {
//     var lat = position.coords.latitude;
//     var lng = position.coords.longitude;
//     codeLatLng(lat, lng)
// }

// function errorFunction(){
//     alert("Geocoder failed");
// }

// function initialize() {
//     geocoder = new google.maps.Geocoder();
// }




// function codeLatLng(lat, lng) {
//   var latlng = new google.maps.LatLng(lat, lng);
//   geocoder.geocode({'latLng': latlng}, function(results, status) {
//     if (status == google.maps.GeocoderStatus.OK) {
//       console.log(results)
//       if (results[1]) {
//         //formatted address
//         alert(results[0].formatted_address)
//         //find country name
//         for (var i=0; i<results[0].address_components.length; i++) {
//             for (var b=0; b<results[0].address_components[i].types.length;b++) {

//               //there are different types that might hold a city admin_area_lvl_1 usually does in come cases looking for sublocality type will be more appropriate
//                 if (results[0].address_components[i].types[b] == "administrative_area_level_1") {
//                     //this is the object you are looking for
//                     city= results[0].address_components[i];
//                     break;
//                 }
//             }
//         }
//         //city data
//         alert(city.short_name + " " + city.long_name)


//         } else {
//           alert("No results found");
//         }
//       } else {
//         alert("Geocoder failed due to: " + status);
//       }
//     });
//   }


























 

// const $pin = document.querySelector("#pin");

// $pin.addEventListener("click", () =>{

//   navigator.geolocation.getCurrentPosition(function(posicao) {
//     var url = "http://nominatim.openstreetmap.org/reverse?lat="
//               +posicao.coords.latitude+"&lon="+posicao.coords.longitude
//               +"&format=json&json_callback=preencherDados";

//     var script = document.createElement('script');
//     script.src = url;
//     document.body.appendChild(script);
//   });

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








