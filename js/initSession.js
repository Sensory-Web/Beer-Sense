// initialize code to use Parse API
console.log('Initializing Parse API...');
// Test2:
Parse.initialize("WmkPV6MSBNixJobppXdtD7uyNnYxVO0zWVO4RtKM", "uoK47XfupjtOXRx5NTO0q23mH8eTnkc3SMH9JGpe");
// Beer Sense:
//Parse.initialize("OwAR25EdrsgZE6fPdlws5czLrtoYxtV1ym9Uyys1", "6LGiPcWb2TggJAEdjQPzIyXtzyFlpCOY1tISoZYF");

var Session = Parse.Object.extend("Session");
thisSession = new Session(); // default to starting new Session (not saved to Parse yet though)
getLocation();
var thisUserIndex = 0; // first user

var tasters = [
  {"name":"(no name)",
   "aromaScore":0,
   "aromaScore":0,
   "flavorScore":0,
   "flavorScore":0,
   "impressionScore":0},
];
thisSession.set("tasters", tasters);


/*****************
* sample JSON code *
var employees = [
{ "firstName" : "John" , "lastName" : "Doe" },
{ "firstName" : "Anna" , "lastName" : "Smith" },
{ "firstName" : "Peter" , "lastName" : "Jones" }, ];
document.getElementById("origname").innerHTML=employees[0].firstName + " " + employees[0].lastName;

// Set new name
employees[0].firstName="Gilbert";
document.getElementById("newname").innerHTML=employees[0].firstName + " " + employees[0].lastName;
*******************/