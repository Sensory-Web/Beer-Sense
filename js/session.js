function saveSession(){
  thisSession.save(null, {
    success: function(sessionObj) {
      console.log('Session saved ('+sessionObj.id+')');
    },
    error: function(sessionObj, error) {
      console.log('Failed to save session [error code: '+error.description+']');
    }
  });
}

function getCurrentLocalSessions(){
  console.log('Getting geolocation...');
  if (navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
      latVal=position.coords.latitude;
      longVal=position.coords.longitude;
      console.log('Latitude: ' + latVal);
      console.log('Latitude: ' + longVal);
      // User's location
      var userGeoPoint = new Parse.GeoPoint({latitude: latVal, longitude: longVal});
      var now = new Date();
      var halfHourAgo = new Date(now-(1800*1000));
      // Create a query for places
      var query = new Parse.Query(Session);
      query.descending("updatedAt");
      query.greaterThan("updatedAt",halfHourAgo);
      // Interested in locations near user.
      query.withinKilometers("location", userGeoPoint, 1); // order may be weird
      query.near("location", userGeoPoint);
      // Limit what could be a lot of points.
      query.limit(10);
      // Final list of objects
      query.find({
        success: function(nearbySessions) {
          console.log('Search succeeded');
          var sessionList = document.getElementById("sessionList");
          if (nearbySessions.length>0){
            document.getElementById("sessionList").className = "list-group";
            sessionList.innerHTML = '';
            //sessionList.innerHTML = '<div class="list-group">';
            console.log('Recent nearby sessions: ');
            for (var i=0; i<nearbySessions.length; i++)
              {
              console.log('  ' + nearbySessions[i].id);
              var query = new Parse.Query(Session);
              query.get(nearbySessions[i].id, {
                success: function(nearbySession) {
                  sessionList.innerHTML = sessionList.innerHTML + '<a href="#" id="'+nearbySession.id+'" class="list-group-item">' + nearbySession.get("beerName") + ' @ ' + nearbySession.get("locationName") +' w/ '+ nearbySession.get("tasters")[0].name + '</a>';
                }, // success
                error: function(object, error) {
                  // The object was not retrieved successfully.
                  // error is a Parse.Error with an error code and description.
                  console.log('Error retrieving session.  Error code: '+error);
                } // error
              }); // query.get
            } // for
            //sessionList.innerHTML = sessionList.innerHTML + '</div>';
          } // if
          else{
            console.log('No sessions found');
            document.getElementById("sessionList").className = "alert alert-warning";
            document.getElementById("sessionList").innerHTML = "Sorry, there aren't any sessions in your area right now... but feel free to start one!";
          } // else
        }, // query.find success
        error: function(error) {
          console.log('Search failed. Error: '+error);
        } // query.find error
      }); // query.find
    }); // getCurrentPosition
  }else{
    console.log('Geolocation is not supported by this browser');
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}