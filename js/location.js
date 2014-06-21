function getLocation() {
  console.log('Getting geolocation...');
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      latVal=position.coords.latitude;
      longVal=position.coords.longitude;
      console.log('Latitude: ' + latVal);
      console.log('Longitude: ' + longVal);
      var point = new Parse.GeoPoint({latitude: latVal, longitude: longVal});
      thisSession.set("location", point);
      //sessionObj.save(null).then(function(object) {
      //  console.log('Geolocation saved to session id: ' + sessionObj.id);
      //})
    });
  }else{
    console.log('Geolocation is not supported by this browser');
  }
}

function showPosition(position) {
  lat=position.coords.latitude;
  lon=position.coords.longitude;
  latlon=new google.maps.LatLng(lat, lon)
  mapholder=document.getElementById('mapholder')
  mapholder.style.height='200px';
  mapholder.style.width='200px';

  var myOptions={
    center:latlon,zoom:14,
    mapTypeId:google.maps.MapTypeId.ROADMAP,
    mapTypeControl:false,
    navigationControlOptions:{style:google.maps.NavigationControlStyle.SMALL}
  };
  var map=new google.maps.Map(document.getElementById("mapholder"),myOptions);
  var marker=new google.maps.Marker({position:latlon,map:map,title:"You are here!"});
}

function getDistance(lat1,lon1,lat2,lon2) {
  //var R = 6371; // Radius of the earth in km
  var R = 3959; // Radius of the earth in mi
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance
  return d;
}

function deg2rad(deg) {
  return deg * (Math.PI/180)
}