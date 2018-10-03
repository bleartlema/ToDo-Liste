function myMap() {

    //Map wird inizialisert
    var mapProp = {
        center: new google.maps.LatLng(47.368650, 8.539183),
        zoom: 15,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
// //
// //
// //

    // Try HTML5 geolocation.
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function (position) {
            var pos = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            map.setPosition(pos);
            map.setContent('Location found.');
            map.open(map);
            map.setCenter(pos);
        }, function () {
            handleLocationError(true, map, map.getCenter());
        });
    } else {
        // Browser doesn't support Geolocation
        handleLocationError(false, map, map.getCenter());

    }
    var map, map;

    function handleLocationError(browserHasGeolocation, map, pos) {
        map.setPosition(pos);
        map.setContent(browserHasGeolocation ?
            'Error: The Geolocation service failed.' :
            'Error: Your browser doesn\'t support geolocation.');
        map.open(map);
    }
}