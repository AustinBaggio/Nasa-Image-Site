import { Component, OnInit } from '@angular/core';
import { SingleCollectionService } from '../single-collection.service';
import { GeneralService } from '../general.service';
import { CollectionLoadService } from '../collection-load.service';

@Component({
  selector: 'app-display-image',
  templateUrl: './display-image.component.html',
  styleUrls: ['./display-image.component.css']
})
export class DisplayImageComponent implements OnInit {

  constructor(public colLoad:CollectionLoadService, public sCol:SingleCollectionService, public genServ:GeneralService) { 
    
  }

  ngOnInit() {
  }

  updateRating(rate){

    var col = this.sCol.currentCol

    this.colLoad.updateImageCollection(col.name, col.descript, col.visability, col.owner, col.imageUrls, rate)
    this.sCol.deleteCollection(col._id);
    

  }
  myCollection(){
    console.log(this.genServ.afAuth.auth.currentUser)
    var a = false
    if(this.genServ.afAuth.auth.currentUser == this.sCol.currentCol.owner)
    {return true}
    return false
  }

}
