import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component'

export const firebaseConfig = {
  apiKey: "AIzaSyBFLOiVEO0bjk8bnHBVIVHS2glbTE7p3Jk",
  authDomain: "lab05-c9e9b.firebaseapp.com",
  databaseURL: "https://lab05-c9e9b.firebaseio.com",
  projectId: "lab05-c9e9b",
  storageBucket: "lab05-c9e9b.appspot.com",
  messagingSenderId: "414705193528"
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig, "Nasa App"),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule // imports firebase/auth, only needed for auth features
    /*
    FormsModule,
    HttpModule,
    */
    
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }


