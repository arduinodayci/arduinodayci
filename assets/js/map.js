function SA_GoogleMaps(){

var myLatlng = new google.maps.LatLng(-20.803049,-41.155421);

    var mapOptions = {
        zoom: 14,
        center: myLatlng,
        scrollwheel: false,
        panControl: false,
        mapTypeControl: true,
        styles: [
            {
                stylers: [
                    {saturation: -50}
                ]
            },
            {
                featureType: 'water',
                stylers: [
                    {color: '#40b4ba'}
                ]
            }
        ],

        zoomControlOptions: {position: google.maps.ControlPosition.LEFT_CENTER}

    }

    var map = new google.maps.Map(document.getElementById('location'), mapOptions);

    google.maps.event.addDomListener(window, 'resize', function(){
        var center = map.getCenter();
        google.maps.event.trigger(map, 'resize');
        map.setCenter(center);
    });

    var marcador = new google.maps.Marker({
        position: myLatlng,

        map: map,
        icon: '/assets/img/pin.png',
        title: 'IFES - Cachoeiro'
    });

}

function SA_LoadGoogleMaps(){
  var script = document.createElement('script');
  script.type = "text/javascript";
  script.src = "http://maps.googleapis.com/maps/api/js?key=AIzaSyCdvKiZ7dmgeAGH3GicFsgkMdG0VtZbTew&sensor=true&callback=SA_GoogleMaps";
  document.body.appendChild(script);
}

window.onload = SA_LoadGoogleMaps;
