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
  constructor(public afAuth: AngularFireAuth, public genServe:GeneralService) {
    
  }

  sanatizedE:string = "";
  sanatizedP:string = "";
  a = 0;

  registerWithEmail(e, p){
    
 
    this.sanatizedE = this.genServe.sanatization(e);

    if(this.checkInput(this.sanatizedE,p) == true){
      this.afAuth.auth.createUserWithEmailAndPassword(e, p)
    }
    //this.emailVerify();
  }
  checkInput(a,b){
    return this.genServe.emailFormat(a) && this.genServe.passFormat(b)
  }
  emailVerify(){
    var user = this.afAuth.auth.currentUser;
    console.log("Sending Verification to: ", user.email);
    user.sendEmailVerification();
  }


  loginWithEmail(e,p){

      this.sanatizedE = this.genServe.sanatization(e);
      if( this.genServe.emailFormat(this.sanatizedE) == true){
        this.afAuth.auth.signInWithEmailAndPassword(e,p).catch(
          (err)=>{
            alert("Login Failed. Check email and password")
          })
            
         
      }
  }
  login() {
    this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider());
  }


  isVerified(){
    var user = this.afAuth.auth.currentUser;
    console.log(user.emailVerified);
    return user.emailVerified;
  }

  
  
}