var visitorinfo = {};	

$(document).ready(function (){	
	if (window['google'] && google.loader.ClientLocation) {
		visitorinfo = {
			'name':    'google', 
			'country': google.loader.ClientLocation.country,
			'city': google.loader.ClientLocation.city,
			'longitude': google.loader.ClientLocation.longitude, 
			'latitude': google.loader.ClientLocation.latitude    
		};
	};  
		
	// Add smooth scrolling to all links in navbar link
   $("#navbar a, .details").on('click', function(event) { 
		if(this.hash.indexOf("#")==0){
		  // Prevent default anchor click behavior
		  event.preventDefault();

		  // Store hash
		  var hash = this.hash;
		  var pos = $(this).offset().top;
	
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
	
	//show google map
	$('#showmap').on('shown.bs.tab', function(event){	
		var visitor = new google.maps.LatLng(visitorinfo.latitude, visitorinfo.longitude); 
		//var myCenter = new google.maps.LatLng(33.7550, -84.3900); //Atlanta Location	
		var myCenter = new google.maps.LatLng(33.8257885, -84.3459087);
		var mapDiv = document.getElementById("map");
		var map = initMap(myCenter,mapDiv);		
		getCurrentLocation(myCenter, map);
		//getDirection(myCenter, visitor, map);	
	});
	
	$('.navbar-nav a').on('shown.bs.tab', function(event){
		var activetab = $(event.target).text();         
		var previoustab = $(event.relatedTarget).text();  
		//console.log("previous is "+previoustab+" and now is "+activetab);
	});
		
});

function showProject(obj){
	$('.navbar-nav a[href="#portfolio"]').tab('show');
	var project = $(obj).attr('tabname');	
	var pos = (project!=""?$("#"+project).offset().top:pos);
	$('body').animate({
		scrollTop: pos
	}, 100, function(){
		window.location.hash = project;
	});		
}
			
/*** google map api ***/
function initMap(mylocation,div) {	
	var mapProp = {
		center:mylocation,
		zoom:12,
		scrollwheel:true,
		draggable:true,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	},
	map = new google.maps.Map(div, mapProp);
	return map;	
}
		
function getCurrentLocation(myCenter, map){
	var marker = new google.maps.Marker({
		position:myCenter,
	});
	marker.setMap(map);			
}

function getDirection(start, end, map){
	// Instantiate a directions service.
	directionsService = new google.maps.DirectionsService,
	directionsDisplay = new google.maps.DirectionsRenderer({
		map: map
	}),
	markerA = new google.maps.Marker({
		position: start,
		title: "Start",
		label: "A",
		map: map
	}),
	markerB = new google.maps.Marker({
		position: end,
		title: "Eend",
		label: "B",
		map: map
	});
	
	// get route from A to B
	calculateAndDisplayRoute(directionsService, directionsDisplay, mylocation, destination);
}

function calculateAndDisplayRoute(directionsService, directionsDisplay, start, end) {
	directionsService.route({
	origin: start,
	destination: end,
	travelMode: google.maps.TravelMode.DRIVING
	}, function(response, status) {
		if (status == google.maps.DirectionsStatus.OK) {
		  directionsDisplay.setDirections(response);
		} else {
		  window.alert('Directions request failed due to ' + status);
		}
	});
}		

/*** Angular ***/			
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
