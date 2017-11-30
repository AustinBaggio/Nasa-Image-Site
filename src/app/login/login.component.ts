import { Component } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(public afAuth: AngularFireAuth) {
  }
  registerWithEmail(e, p){

    this.afAuth.auth.createUserWithEmailAndPassword(e, p);

  }
  loginWithEmail(e,p){
    this.afAuth.auth.signInWithEmailAndPassword(e,p);
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }
  logout() {
    this.afAuth.auth.signOut();
  }
}