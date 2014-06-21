function updateUserName(){
  var username = $('#firstName').val();
  console.log('thisUserIndex: '+thisUserIndex);
  console.log('tasters: '+tasters);
  tasters[thisUserIndex].name = username;

  thisSession.set("tasters", tasters);
  //saveSession(); //thisSession.save();
  //console.log('Saved username ('+username+') to session ('+thisSession.id+')');
}

function updateBeerName(){
  var beerName = $('#beerName').val();

  thisSession.save(); // beer has been named, so save (& get session ID)

  thisSession.set("beerName", beerName);
  saveSession(); //thisSession.save();
  console.log('Saved beer ('+beerName+') to session ('+thisSession.id+')');
}

function updateLocationName(){
  var locationName = $('#locationName').val();

  thisSession.set("locationName", locationName);
  saveSession(); //thisSession.save();
  console.log('Saved location ('+locationName+') to session ('+thisSession.id+')');
}
