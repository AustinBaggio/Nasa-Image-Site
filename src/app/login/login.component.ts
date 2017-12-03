/* This component handles the logging in and out of users. Its template changes based off of authentication status 
Google's firebase was used for authentication since they provide very simple tools and an attractive console 
at console.firebase.google.com
*/

import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { GeneralService } from '../general.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public afAuth: AngularFireAuth, public genServe: GeneralService) {

  }
//registration
  registerWithEmail(e, p) { 
    //sanatize data
    e = this.genServe.sanatization(e);

    //checks input of username and password
    if (this.checkInput(e, p) == true) {
      //call to firebase registration
      this.afAuth.auth.createUserWithEmailAndPassword(e, p)
        .catch(
        (err) => {
          //display error if there is one
          alert(err)
        })
    }
  }

  //helper function to check the input format using the general service helper
  checkInput(a, b) {
    return this.genServe.emailFormat(a) && this.genServe.passFormat(b)
  }

  //verifies email using firebase, they send the email
  emailVerify() {
    var user = this.afAuth.auth.currentUser;
    console.log("Sending Verification to: ", user.email);
    user.sendEmailVerification();
  }

  //email login flow
  loginWithEmail(e, p) {
    //sanitize & chekc format
    e = this.genServe.sanatization(e);
    if (this.genServe.emailFormat(e) == true) {
      //signin using firebase, display any error
      this.afAuth.auth.signInWithEmailAndPassword(e, p).catch(
        (err) => {
          alert(err)
        })


    }
  }
  //google account login
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }

//returns whether or not there is a user logged in
  isVerified() {
    var user = this.afAuth.auth.currentUser;
    return user.emailVerified;
  }

}