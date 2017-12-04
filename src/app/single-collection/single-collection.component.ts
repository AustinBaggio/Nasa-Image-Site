/* This component is for a single isntance of a collection
it houses the collections images and other attributes for display and manipulation by the user */

import { Component, OnInit } from '@angular/core';
import { SingleCollectionService } from '../single-collection.service';

@Component({
  selector: 'app-single-collection',
  templateUrl: './single-collection.component.html',
  styleUrls: ['./single-collection.component.css']
})
export class SingleCollectionComponent implements OnInit {

  name
  description
  visability
  owner
  imageUrls
  rating

  constructor(public sCol: SingleCollectionService) { }

  ngOnInit() {
  }


  editCollection(id, name, desc, vis){

    console.log("ID: "+ id)
    console.log("NAME " +name)
    console.log("DESC " +desc)
    console.log("VIS "+vis)
    
  }

  deleteCollection(a){
    console.log("DELETING " +a._id)
    this.sCol.deleteCollection(a._id);
  }
}
