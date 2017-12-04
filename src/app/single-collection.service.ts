import { Injectable } from '@angular/core';
import {RequestOptions, Request, Http, RequestMethod} from '@angular/http';
import { GeneralService } from './general.service';

@Injectable()
export class SingleCollectionService {
  currentCol
  constructor(private http: Http, public genServe:GeneralService) { }

  url = this.genServe.url+"collection/";
  //gets the collection that was sent from the home page
  showSingleCollection(a){
    this.currentCol=a;
  }

   //simple post all
   deleteCollection(id) {
     console.log(this.url+id);
      this.http.delete(this.url+id).subscribe(data=>{
      console.log(data)
    })
   
  }
  

}
