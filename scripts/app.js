// Google Maps Block 

function initMap(){
    var location = {lat: 36.153980, lng: -95.992775 };
    var map = new google.maps.Map(document.getElementById('map'), {
        center: location,
        zoom: 12
    });

    // Add a marker to the map
    var marker = new google.maps.Marker({
        position: location,
        map: map,
        title: 'My Location'
    });
}
