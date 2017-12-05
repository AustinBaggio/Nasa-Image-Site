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

    

  }

}
