/* This component is for a single isntance of a collection
it houses the collections images and other attributes for display and manipulation by the user */

import { Component, OnInit, ViewChild } from '@angular/core';
import { SingleCollectionService } from '../single-collection.service';
import { CollectionLoadService } from '../collection-load.service';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-single-collection',
  templateUrl: './single-collection.component.html',
  styleUrls: ['./single-collection.component.css']
})
export class SingleCollectionComponent implements OnInit {

  confirm = false

  constructor( public sCol: SingleCollectionService, public colLoad:CollectionLoadService, public genServ:GeneralService) { }
  
  ngOnInit() {
  }
  
  editCollection(id, name, desc, vis, urls){
    var owne=this.genServ.afAuth.auth.currentUser.email
    
    this.sCol.deleteCollection(id);
    this.colLoad.updateImageCollection(name, desc, vis, owne, urls, this.sCol.currentCol.rating)
    
  }

  
  clicked(){
    this.confirm = !this.confirm
    
  }

  deleteCollection(a){
    this.clicked()
    this.sCol.deleteCollection(a._id);
    alert("Deleted Collection")
  }
}
