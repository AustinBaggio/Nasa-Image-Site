import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';
import { CollectionLoadService } from '../collection-load.service';
import { SingleCollectionService } from '../single-collection.service';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {

  constructor(public genServ: GeneralService, public colLoad:CollectionLoadService, public sCol: SingleCollectionService) { }

  ngOnInit() {
  }

  addImage(col, link){

    
    console.log(col._id)
    /* Add the image link to an existing collection */
    
    col.imageUrls.push(link)
    console.log(col.imageUrls)
    this.colLoad.updateImageCollection(col.name, col.descript, col.visability, col.owner, col.imageUrls, col.rating)
    this.sCol.deleteCollection(col._id);
    
  }



}
