import { googleAuth } from "./googleAuth";

// Checks for which log out we should do... maybe don't need this.
// other methods may work for both.

export const logout = {
  logout: function(successfulLogIn, navigate) {
    const userRecord = JSON.parse(localStorage.getItem("capstone_user"));
    if (userRecord.type === "google") {
      googleAuth.signOut(successfulLogIn, navigate);
    }
  }
};