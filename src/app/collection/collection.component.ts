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
  //api URL for collections
  url:string = this.genServe.url+'collection/'; 
  
  //local collection of data for testing
  colTen


  constructor(public colLoad:CollectionLoadService, public sCol:SingleCollectionService, public genServe:GeneralService) { 
    //initialized the data from the api call service
    colLoad.getStringData(this.url);
    colLoad.getData(this.url);

    //testing
    this.colTen = colLoad.data;
    
  }
  publicPrivate(a){
    if (a.visability == true){
    return "Public"
    }
    return "Private"
    
  }

  ngOnInit() {
  }
   
}
