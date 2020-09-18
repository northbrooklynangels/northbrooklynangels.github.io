---
layout: page
title: Angelmobile Meals
---

<style>
    /* This is so the map actually shows up */
    #map_canvas {
        height: 475px;
    }
</style>

North Brooklyn Angels aims to cook & serve 1,000 meals per week to the food insecure in our community. Each weekday, the Angelmobile currently serves around 100-225 meals depending on the site and the weather. Volunteers cook and serve all the food served in our community meals.

 
* Monday’s Community Meal In Greenpoint  
  12:30-1:30pm

  862 Manhattan Avenue: The truck is parked in front of the steps of the St Anthony of Padua-St. Alphonsus church at the intersection of Manhattan Avenue and Milton Street.

* Tuesday’s Community Meal on the Southside  
  12:30-1:30pm

  240 Division Avenue: The truck is parked across the street from the Williamsburgh Library on the Division Avenue Overpass, between Marcy Ave & Rodney Street.

* Wednesday's Community Meal In East Williamsburg/Bushwick  
  12:30-1:30pm

  195 Maujer Street: The truck is parked in front of St. John the Evangelist Lutheran Church, across the street from the Williamsburg Houses

* Thursday's Community Meal in East Williamsburg  
  12:30-1:30pm

  Cooper Park Houses: The truck is parked in front of the playground at the intersection of Jackson Street and Debevoise Avenue.

* Friday's Community Meal in Bushwick & the Northside  
  12:30-1:30pm

  157 Johnson Ave: The truck is parked on Johnson Ave outside the Most Holy Trinity parking lot.

  1 Havemeyer Ave: A meal is served from our community kitchen

<div id="map_canvas"></div>

<script>
function initialize() {
    var map;
    var bounds = new google.maps.LatLngBounds();
    var mapOptions = {
        mapTypeId: 'roadmap'
    };
                    
    // Display a map on the page
    map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
    map.setTilt(45);
        
    // Multiple Markers
    var markers = [
        ['St. Anthony St. Alphonsus Church, Brooklyn', 40.7293837,-73.95362060000002],
        ['Division Ave Overpass, Brooklyn', 40.707215, -73.957599],
        ['St. John Lutheran Church, Brooklyn', 40.7111068,-73.94272330000001],
        ['Cooper Houses/Divine Mercy, Brooklyn', 40.717401, -73.939328],
        ['Our Lady of Mt Carmel, Brooklyn', 40.716055, -73.952640],
    ];
                        
    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h4>Monday Lunch Service</h4>' +
        '<p>St. Anthony St. Alphonsus Church<br />862 Manhattan Ave, Brooklyn NY 11222<br /><br />12:30pm - 1:30pm<br /><br />The truck will be parked in front of the steps of the church, at the intersection of Manhattan Ave & Milton Street.<br /><br />Neighborhood Sponsor: St Anthony of Padua-St Alphonsus & 94th Precinct Community Council</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h4>Tuesday Lunch Service</h4>' +
        '<p>Division Ave Overpass<br />240 Division Ave Brooklyn NY 11211<br /><br />12:30pm - 1:30pm<br /><br />The truck will be parked across the street from the Williamsburgh Library, located on Division Ave near intersection of Marcy Ave in South Williamsburg<br /><br />Neighborhood Sponsor: Transfiguration Church and Southside CSA</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h4>Wednesday Lunch Service</h4>' +
         '<p>St. John Lutheran Church<br />195 Maujer St. Brooklyn NY 11206<br /><br />12:30pm - 1:30pm<br /><br />The truck will be parked in front of the church, located across the street from the Williamsburg Houses, on Maujer Street, between Graham & Humboldt Ave.<br /><br />Neighborhood Sponsor: St John Lutheran Church</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h4>Thursday Lunch Service</h4>' +
        '<p>Jackson St between Kingsland Ave & Debevoise Ave Brooklyn NY 11211<br /><br />12:30pm - 1:30pm<br /><br />The truck is parked by the sidewalk just outside the playground at Cooper Park Houses on Jackson Ave<br /><br />Neighborhood Sponsor: Cooper Park Residents Council</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h4>Friday Lunch Service</h4>' +
        '<p>Our Lady of Mt Carmel<br />275 N8th St Brooklyn NY 11211<br /><br />12:30pm - 1:30pm<br /><br />The truck is parked outside OLMC (and our community kitchen!) on Havemeyer St.<br /><br />Neighborhood Sponsor: OLMC/Church of the Annunciation</p>' +
        '</div>'],
    ];
        
    // Display multiple markers on a map
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    
    // Loop through our array of markers & place each one on the map  
    for( i = 0; i < markers.length; i++ ) {
        var position = new google.maps.LatLng(markers[i][1], markers[i][2]);
        bounds.extend(position);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: markers[i][0]
        });
        
        // Allow each marker to have an info window    
        google.maps.event.addListener(marker, 'click', (function(marker, i) {
            return function() {
                infoWindow.setContent(infoWindowContent[i][0]);
                infoWindow.open(map, marker);
            }
        })(marker, i));

        // Automatically center the map fitting all markers on the screen
        map.fitBounds(bounds);
    }

    // Override our map zoom level once our fitBounds function runs (Make sure it only runs once)
    var boundsListener = google.maps.event.addListener((map), 'bounds_changed', function(event) {
        this.setZoom(14);
        google.maps.event.removeListener(boundsListener);
    });   
}
</script>

<script defer src="//maps.googleapis.com/maps/api/js?key=AIzaSyBTtcB9lDbsL3hX27kRs4QhCfN_QufHQck&sensor=false&callback=initialize"></script>