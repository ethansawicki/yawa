import {
    getAuth,
    signInWithPopup,
    GoogleAuthProvider,
    signOut,
  } from "firebase/auth";
  
  // SignIn brings up the google sign in pop up AND works
  // for both signing in AND registering a user
  
  export const googleAuth = {
    // Works to sign in AND register a user
    signInRegister: function(successfulLogIn, navigate) {
      return new Promise((res) => {
        const provider = new GoogleAuthProvider();
        provider.setCustomParameters({
          prompt: 'select_account'
        })
        const auth = getAuth();
        signInWithPopup(auth, provider)
          .then((userCredential) => {
            const userAuth = {
              email: userCredential.user.email,
              displayName: userCredential.user.displayName,
              uid: userCredential.user.uid,
              type: "google",
            };
            // Add user object to localStorage
            localStorage.setItem("capstone_user", JSON.stringify(userAuth));
            // Trigger state change
            successfulLogIn(true)
            navigate('/')
            
          })
          .catch((error) => {
            console.log("Google Sign In Error");
            console.log("error code", error.code);
            console.log("error message", error.message);
            console.log("error email", error.email);
          });
      });
    },
    // Sign out a user
    signOut: function(successfulLogIn, navigate) {
      const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Remove user from localStorage
          localStorage.removeItem("capstone_user");
          // Trigger state change 
          successfulLogIn(false);
          navigate('/')
          console.log("Sign Out Success!");
        })
        .catch((error) => {
          console.log("Google SignOut Error");
          console.log("error code", error.code);
          console.log("error message", error.message);
        });
    },
  };
  