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

function updateTotalScore(){
  var newVal = 0;
  newVal += $('#aromaScore').val()/1;
  newVal += $('#appearanceScore').val()/1;
  newVal += $('#flavorScore').val()/1;
  newVal += $('#mouthfeelScore').val()/1;
  newVal += $('#impressionScore').val()/1;
  $("#totalScore").html(newVal);
}

$("#aromaScore").change(function () {
  var newValue = $('#aromaScore').val();
  $("#aromaScoreVal").html(newValue);
  updateTotalScore();

  tasters[thisUserIndex].aromaScore = newValue;
  thisSession.set("tasters", tasters);
  //thisSession.set("aromaScore", newValue);
  saveSession(); //thisSession.save();
  console.log('Saved new aroma score ('+newValue+') to session ('+thisSession.id+')');
});

$("#appearanceScore").change(function () {
  var newValue = $('#appearanceScore').val();
  $("#appearanceScoreVal").html(newValue);
  updateTotalScore();

  tasters[thisUserIndex].appearanceScore = newValue;
  thisSession.set("tasters", tasters);
  //thisSession.set("appearanceScore", newValue);
  saveSession(); //thisSession.save();
  console.log('Saved new appearance score ('+newValue+') to session ('+thisSession.id+')');
});

$("#flavorScore").change(function () {
  var newValue = $('#flavorScore').val();
  $("#flavorScoreVal").html(newValue);
  updateTotalScore();

  tasters[thisUserIndex].flavorScore = newValue;
  thisSession.set("tasters", tasters);
  //thisSession.set("flavorScore", newValue);
  saveSession(); //thisSession.save();
  console.log('Saved new flavor score ('+newValue+') to session ('+thisSession.id+')');
});

$("#mouthfeelScore").change(function () {
  var newValue = $('#mouthfeelScore').val();
  $("#mouthfeelScoreVal").html(newValue);
  updateTotalScore();

  tasters[thisUserIndex].mouthfeelScore = newValue;
  thisSession.set("tasters", tasters);
  //thisSession.set("mouthfeelScore", newValue);
  saveSession(); //thisSession.save();
  console.log('Saved new mouthfeel score ('+newValue+') to session ('+thisSession.id+')');
});

$("#impressionScore").change(function () {
  var newValue = $('#impressionScore').val();
  $("#impressionScoreVal").html(newValue);
  updateTotalScore();

  tasters[thisUserIndex].impressionScore = newValue;
  thisSession.set("tasters", tasters);
  //thisSession.set("impressionScore", newValue);
  saveSession(); //thisSession.save();
  console.log('Saved '+tasters[thisUserIndex].name+'\'s overall impression score ('+newValue+') to session ('+thisSession.id+')');
});