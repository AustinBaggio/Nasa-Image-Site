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
    
  }

  ngOnInit() {
  }
   
  sortTen(a){
    this.sortByRating(a);
    return a;
  }

  sortByRating(a){
    var outer, inner;
    //bubble sort by rating
    for (outer=a.length-1; outer>0; outer--){
      for(inner = 0;inner<outer;inner++){
        if (a[inner].rating<a[inner+1].rating){
          var temp = a[inner];
          a[inner]=a[inner+1];
          a[inner+1]=temp;
        }
      }
    
    }
    return a;

  }
  tenPublic(){
    var a = this.colTen
    var l = a.length
    for (var i=0;i<a.length;i++){
      
      if (a[i].visability == false){
        a.splice(i,1)
      }

    }
    while(a.length>10){
      a.splice(a.length-1,1)
    }
    return a;
  }

}
