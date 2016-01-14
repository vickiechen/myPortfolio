$(document).ready(function (){	
	
	// Add smooth scrolling to all links in navbar link
   $("#navbar a, .details").on('click', function(event) { 
		if(this.hash.indexOf("#")==0){
		  // Prevent default anchor click behavior
		  event.preventDefault();

		  // Store hash
		  var hash = this.hash;
		  var pos = $(this).offset().top;
	
		  //  var project = (hash=="portfolio"?$(this).attr("for"):""); 
		  //  pos = (project!=""?$("#"+project).offset().top:pos);
		  
		  // Using jQuery's animate() method to add smooth page scroll
		  // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
		  $('body').animate({
			scrollTop: pos
		  }, 100, function(){

			// Add hash (#) to URL when done scrolling (default click behavior)
			window.location.hash = hash;
			});
		}
	});	
	
	$('#navbar').tab();	
	$('[data-toggle="tooltip"]').tooltip(); 
	
	document.onmousedown=disableclick;
	status="Right Click Disabled";

 });

var myApp = angular.module('myApp',[]);

myApp.controller('homeController', function($scope,$http){
	$http.get('data/home.json').success(function(data) {
		$scope.home=data;	
		$scope.$watch('home', function(newValue,oldValue){
			//console.log("new value is "+newValue);
	   });
	});
});

function disableclick(event){
  if(event.button==2) return false;    
}

var myCenter = new google.maps.LatLng(33.7550, -84.3900);

function initialize() {
	var mapProp = {
			center:myCenter,
			zoom:12,
			scrollwheel:false,
			draggable:false,
			mapTypeId:google.maps.MapTypeId.ROADMAP
			};

			var map = new google.maps.Map(document.getElementById("googleMap"),mapProp);

			var marker = new google.maps.Marker({
			position:myCenter,
	});

	marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);