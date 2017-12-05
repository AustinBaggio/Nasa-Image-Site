import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';
import { CollectionLoadService } from '../collection-load.service';
import { SingleCollectionService } from '../single-collection.service';

@Component({
  selector: 'app-full-image',
  templateUrl: './full-image.component.html',
  styleUrls: ['./full-image.component.css']
})
export class FullImageComponent implements OnInit {

  constructor(public genServ: GeneralService, public colLoad: CollectionLoadService, public sCol: SingleCollectionService) { }

  ngOnInit() {
  }

  //deletes the selected image 
  deleteImage() {
    var col = this.genServ.currentCollection
    var b = []

    //finds which of the images it wasin the current images
    for (var i = 0; i < col.imageUrls.length; i++) {
      if (this.genServ.displayImage != col.imageUrls[i]) {
        b.push(col.imageUrls[i]);
        console.log("NEW IMAGE ", b[i])
      }
    }

    this.colLoad.updateImageCollection(col.name, col.descript, col.visability, col.owner, b)
    this.sCol.deleteCollection(col._id);
    
  }


}
