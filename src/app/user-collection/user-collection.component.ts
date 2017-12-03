import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';
import { CollectionLoadService } from '../collection-load.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-user-collection',
  templateUrl: './user-collection.component.html',
  styleUrls: ['./user-collection.component.css']
})
export class UserCollectionComponent implements OnInit {

  constructor(public afAuth: AngularFireAuth, public genServ: GeneralService, public colLoad: CollectionLoadService) { }

  ngOnInit() {
  }
  newCollection(name, desc, vis){
    name = this.genServ.sanatization(name)
    desc = this.genServ.sanatization(desc)
    
    this.colLoad.postCollection(name, desc, vis, this.afAuth.auth.currentUser.email)
    console.log("Name: " + name +" Description: "+desc+ " Visability: "+vis+ " email: "+this.afAuth.auth.currentUser.email);
    
  }
}
