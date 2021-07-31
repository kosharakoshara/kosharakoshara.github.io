function initMap() {
    // Latitude and Longitude
    var myLatLng = {lat: 51.070870, lng: 30.259720};

    var map = new google.maps.Map(document.getElementById('google-maps'), {
        zoom: 17,
        center: myLatLng
    });

    var marker = new google.maps.Marker({
        position: myLatLng,
        map: map,
        title: 'st. Molodizhna, build. 1, Housing. 1, fl. 15, Hornostaipil, Kyiv 07222, Ukraine' // Title Location
    });
    marker.setAnimation(google.maps.Animation.BOUNCE);
}