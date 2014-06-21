function createDefaultUser(){
  var user = new Parse.User();
  user.set("username", "AnonymousUser");
  user.set("password", "fakepassword");

  user.signUp(null, {
    success: function(user) {
      console.log('User created: ' + user.username);
    },
    error: function(user, error) {
      // Show the error message somewhere and let the user try again.
      alert("Error: " + error.code + " " + error.message);
    }
  });
}

function defaultUserLogin(){
  console.log('Logging in default user...');
  Parse.User.logIn("AnonymousUser", "fakepassword", {
    success: function(user) {
      console.log('User logged in: ' + user.username);
    },
    error: function(user, error) {
      console.log('Failed to log in user: ' + user.username);
    }
  });
}

// use this to log a user out:
// Parse.User.logOut();
// if external account is used, log out default user and log in new (create new if needed)