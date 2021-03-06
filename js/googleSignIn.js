function signinCallback(authResult) {
  gapi.client.load('plus', 'v1');
  if (authResult['status']['signed_in']) {
    // Update the app to reflect a signed in user
    // Hide the sign-in button now that the user is authorized, for example:
    document.getElementById('signinButton').setAttribute('style', 'display:none');
    document.getElementById('signedIn').setAttribute('style', 'display:inline');

    // This sample assumes a client object has been created.
    // To learn more about creating a client, check out the starter:
    //  https://developers.google.com/+/quickstart/javascript
    var request = gapi.client.plus.people.get({'userId' : 'me'});

    request.execute(function(resp) {
      console.log('ID: ' + resp.id);
      console.log('Display Name: ' + resp.displayName);
      console.log('Image URL: ' + resp.image.url);
      console.log('Profile URL: ' + resp.url);

      document.getElementById('userInfo').setAttribute('style', 'display:inline');
      document.getElementById('avatar').setAttribute('src', resp.image.url);
      document.getElementById('username').innerHTML=resp.displayName;
      document.getElementById('firstName').setAttribute('value', resp.name.givenName);
    });
  } else {
    // Update the app to reflect a signed out user
    // Possible error values:
    //   "user_signed_out" - User is signed-out
    //   "access_denied" - User denied access to your app
    //   "immediate_failed" - Could not automatically log in the user
    console.log('Sign-in state: ' + authResult['error']);
    document.getElementById('signinButton').setAttribute('style', 'display:inline');
    document.getElementById('signedIn').setAttribute('style', 'display:none');

    document.getElementById('userInfo').setAttribute('style', 'display:none');
    document.getElementById('avatar').setAttribute('src', '');
    document.getElementById('username').innerHTML="";
    document.getElementById('firstName').setAttribute('value', '');
  }
}
function signoutCallback(){
  gapi.auth.signOut();
}