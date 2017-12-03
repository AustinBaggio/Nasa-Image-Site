import { Component, OnInit } from '@angular/core';
import { CollectionLoadService } from '../collection-load.service';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { SingleCollectionService } from '../single-collection.service';
import { GeneralService } from '../general.service';


@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  url:string = 'https://nasa-austinbaggio.c9users.io/api/collection'; 
  
  colTen


  constructor(public colLoad:CollectionLoadService, public sCol:SingleCollectionService, public genServe:GeneralService) { 
    colLoad.getStringData(this.url);
    colLoad.getData(this.url);
    this.colTen = colLoad.data;
    console.log(this.colTen)
    
  }

  ngOnInit() {
  }
   

}
