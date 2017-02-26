function process ()
{
	var drugname = jQuery("#drugname").val();
	var zipcode = jQuery("#zip").val();
	var phoneNumber = jQuery("#phone").val();
	var ampm = jQuery("#ampm").val();
	alert("You are now signed up for text message reminders. These reminders will be sent");
	if (drugname = "the pill")
	{
		var timeshr = 0;
		var timesdy = 1;
		var how = "water";
		var sideEf = "spotting,  nausea, headaches, weight gain, mood changes, missed periods";
	}
	else if (drugname == "Lipitor" || drugname == "lipitor")
	{
		var timeshr = 0;
		var timesdy = 1;
		var how = "water";
		var sideEf = "side eff";
	}
	else if (drugname == "lisinopril")
	{
		var timeshr = 0;
		var timesdy = 1;
		var how = "water";
		var sideEf = "side eff";
	}
	else if (drugname == "Zestril" || "zestril")
	{
		var timeshr = 0;
		var timesdy = 1;
		var how = "water"
		var sideEf = "light headedness, fever, sore throat, high potassium";
	}
	else if (drugname == "metformin")
	{
		var timeshr = 0;
		var timesdy = 1;
		var how = "meal and full glass of water";
		var sideEf = "side eff";
	}
	var output = "Time to take "+drugname+" with " +how+"! Side effects include: "+ sideEf+". Don't worry too much if you experience these, but contact your doctor if these symptoms persist";

	alert(output);

};



var map;
var service;
var infowindow;

function initialize(location) 
{
  var center1 = new google.maps.LatLng(location.lat, location.lng);


  map = new google.maps.Map(document.getElementById('map'), {
      center: center1,
      zoom: 10
    });


  var request = {
    location: center1,
    radius: '500',
    query: 'pharmacy'
  };


service = new google.maps.places.PlacesService(map);
  service.textSearch(request, getSearchResult);
}

function createMarker(places) 
{
  var bounds = new google.maps.LatLngBounds();
  var placesList = document.getElementById('places');

    for (var i = 0; i < 5; i++) 
    {
        var place = places[i];
        console.log(place);
        var image = {
          url: place.icon,
          size: new google.maps.Size(71, 71),
          origin: new google.maps.Point(0, 0),
          anchor: new google.maps.Point(17, 34),
          scaledSize: new google.maps.Size(25, 25)
        };
        


        function bindListener(){
            console.log(this, "bindListener");        
            var marker = new google.maps.Marker({
              map: map,
              icon: image,
              title: this.name,
              position: this.geometry.location,
            });

            marker.place=this;
            var self = this;
            marker.infowindow = new google.maps.InfoWindow();
                 google.maps.event.addListener(marker, 'click', function() {
                     console.log("abc");
                     marker.infowindow.setContent('<div><strong>' + self.name + '</strong><br>' + '<br>' + self.formatted_address + '</div>');
                    marker.infowindow.open(map, this);
                });
        }

        bindListener.bind(place)();


        placesList.innerHTML += '<li>' + place.name + "- " + place.formatted_address + '</li>';

        bounds.extend(place.geometry.location);
    }
  map.fitBounds(bounds);
}

function getSearchResult(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    
      createMarker(results);
    
  }
}

function search() {
var zip=jQuery("#zip").val();
    var city=jQuery("#city").val();
    var state=jQuery("#state").val();
    var address=jQuery("#address").val();
    var i = 0;
    jQuery.getJSON("http://maps.googleapis.com/maps/api/geocode/json?address=" + address + "," + city + "," + state + " " 
        + zip + ", USA", function(data){
            initialize(data.results[0].geometry.location);
            createHomeMarker(data.results[0].geometry.location);
    });

/* button */
// ===== Scroll to Top ==== 
$(window).scroll(function() {
    if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
        $('#return-to-top').fadeIn(200);    // Fade in the arrow
    } else {
        $('#return-to-top').fadeOut(200);   // Else fade out the arrow
    }
});
$('#return-to-top').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});
};


function createHomeMarker(place) {
    var image = {
    url: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
    size: new google.maps.Size(20, 32),
    origin: new google.maps.Point(0, 0),
    anchor: new google.maps.Point(0, 32)
  };

    function bindListener(){
            var marker = new google.maps.Marker({
              map: map,
              icon: image,
              title: this.name,
              position: this
            });

            marker.place=this;
            var self = this;
            marker.infowindow = new google.maps.InfoWindow();
                 google.maps.event.addListener(marker, 'click', function() {
                     marker.infowindow.setContent('<div><strong>' + self.name + '</strong><br>' + '<br>' + self.formatted_address + '</div>');
                    marker.infowindow.open(map, this);
                });
        }

        bindListener.bind(place)();
}
















/*function mapLookup(zipcode)
{
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "website", false);
	
	
	xhr.setRequestHeader('Content-Type', 'text/xml');
xhr.send();

xmlDocument = xhr.responseXML;
console.log(xmlDocument.childNodes['0'].textContent);
	
	GET
	
	POST
	
	
	
	}


function nameLookup (drugname)
{
	
	}
	
	
	
	
	*/
	
	
	
	
	
/*( "form" ).submit(function( event ) {
  if ( $( "input:first" ).val() === "correct" ) {
    $( "span" ).text( "Validated..." ).show();
    return;
  }
 
  $( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
  event.preventDefault();*/