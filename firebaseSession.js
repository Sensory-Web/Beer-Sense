/* session.js
 * 
 * controls for a BeerSense tasting session
 * uses the Firebase.com service
 * (c) 2014, Jon Boley
 */
 
 var firebaseRef = new Firebase('https://beersense.firebaseio.com');
 Firebase.goOffline(); // no live updates from the server
 
 function authFirebase(){
    var AUTH_TOKEN = '1cPtLdtikyHpWsTEzAaPMRiEfwJayU6AkOFl7XbB';
    firebaseRef.auth(AUTH_TOKEN, function(error, result) {
    if(error) {
        console.log("Firebase authentication failed!", error);
    } else {
        console.log('Firebase Authenticated successfully with payload:', result.auth);
        console.log('Firebase Auth expires at:', new Date(result.expires * 1000));
    }
    });   
 }

 function newUser(userId, userData){
    var usersRef = firebaseRef.child('users');
    usersRef.child(userId).transaction(function(currentUserData) {
        if (currentUserData === null) {
            return userData;
        } else {
            console.log('User already exists.');
            return; // Abort the transaction.
        }
        }, function(error, committed, snapshot) {
            if (error)
                console.log('Transaction failed abnormally!', error);
            else if (!committed)
                console.log('We aborted the transaction (because user already exists).');
            else
            console.log('User added!');
        console.log('User\'s data: ', snapshot.val());
    });
 } // function newUser
 
 function newSession(){
    var sessionsRef = firebaseRef.child('sessions');
    var mySessionRef = sessionsRef.push();
    
    // set timestamp
    mySessionRef.update({ startedAt: Firebase.ServerValue.TIMESTAMP });
    
    
 } // function newSession
 
 
 
 