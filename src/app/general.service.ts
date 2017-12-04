/* This service provides many common services that are used throughout the applications
I chose to use it because it simplifies the code in the local blocks */

import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Injectable()
export class GeneralService {

  url = "https://nasa-austinbaggio.c9users.io/api/";
  nasaURL = 'https://images-api.nasa.gov/'

  constructor(public afAuth: AngularFireAuth) { }

  //sanatization of user input so that no html interferance occurs
  sanatization(text) {
    return text
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/\"/g, '&quot;')
      .replace(/\'/g, '&#39;'); // '&apos;' is not valid HTML 4
  }

  //check the format of emails
  emailFormat(text) {
    //search for an @, if it is before the ., and the length is greater than 1, than the email is in a correct format
    var atpos = text.indexOf('@');
    var dotpos = text.lastIndexOf(".");
    if (text.length <= 0) {
      alert("Enter an email");
      return (false);
    }
    if (atpos < 1 || dotpos < atpos + 2 || dotpos + 2 >= text.length) {
      alert("Not a valid e-mail address");
      return (false);
    }
    return (true);
  }

  //simple password format check
  passFormat(text) {
    if (text.length <= 6) {
      alert("Enter a Password greater than 6 characters");
      return (false);
    }
    return true
  }

  //Global logout button that can be accessed anywhere if need be
  globalLogout() {
    this.afAuth.auth.signOut();
    //location.reload();
  }

  //global admin check
  isAdmin() {
    try {
      //get current user and check if that user is the admin
      var user = this.afAuth.auth.currentUser;
      if (user.email == "admin@admin.admin") {
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  }


}
