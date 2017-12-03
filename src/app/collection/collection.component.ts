import { Component, OnInit } from '@angular/core';
import { CollectionLoadService } from '../collection-load.service';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {
  url:string = 'https://nasa-austinbaggio.c9users.io/api/collection'; 
  
  colTen


  constructor(public colLoad:CollectionLoadService) { 
    colLoad.getStringData(this.url);
    colLoad.getData(this.url);
    this.colTen = this.sortByRating()
    this.colTen = this.tenPublic()
  }

  ngOnInit() {
  }

  sortByRating(){
    var a = this.colLoad.data
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
    console.log(a);
    return a;

  }
  tenPublic(){
    var a = this.colTen
    var l = a.length
    for (var i=0;i<a.length;i++){
      console.log("before: "+a.length)
      
      if (a[i].visability == false){
        a.splice(i,1)
      }
      console.log("after: "+a.length)

    }
    while(a.length>10){
      a.splice(a.length-1,1)
    }
    return a;
  }

}
