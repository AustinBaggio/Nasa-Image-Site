import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { environment } from '../environments/environment';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CollectionComponent } from './collection/collection.component';
import { PpdmcaComponent } from './ppdmca/ppdmca.component';
import { DmcaAdminToolComponent } from './dmca-admin-tool/dmca-admin-tool.component'
import { GeneralService } from './general.service';
import { ApiCallService } from './api-call.service';
import { CollectionLoadService } from './collection-load.service';
import { SingleCollectionComponent } from './single-collection/single-collection.component';
import { SingleCollectionService } from './single-collection.service';
import { UserCollectionComponent } from './user-collection/user-collection.component';

export const firebaseConfig = {
  apiKey: "AIzaSyBFLOiVEO0bjk8bnHBVIVHS2glbTE7p3Jk",
  authDomain: "lab05-c9e9b.firebaseapp.com",
  databaseURL: "https://lab05-c9e9b.firebaseio.com",
  projectId: "lab05-c9e9b",
  storageBucket: "lab05-c9e9b.appspot.com",
  messagingSenderId: "414705193528"
};

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'dmca-admin-tool', component: DmcaAdminToolComponent},
  { path: 'login', component: LoginComponent},
  { path: 'about', component: AboutComponent},
  { path: 'policies', component: PpdmcaComponent},
  { path: 'single-collection', component: SingleCollectionComponent},
  { path: 'user-collection', component: UserCollectionComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}, //default is home
  { path: '**', redirectTo: '/home', pathMatch: 'full'}, //any that arent defined redirect home

]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    AboutComponent,
    CollectionComponent,
    PpdmcaComponent,
    DmcaAdminToolComponent,
    SingleCollectionComponent,
    UserCollectionComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig, "Nasa App"),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features
    RouterModule.forRoot(appRoutes),
    HttpModule
    
  ],
  providers: [GeneralService, ApiCallService, CollectionLoadService, SingleCollectionService],
  bootstrap: [AppComponent],
})
export class AppModule { }


