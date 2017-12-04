import { Injectable } from '@angular/core';
import {RequestOptions, Request, Http, RequestMethod} from '@angular/http';
import { GeneralService } from './general.service';

@Injectable()
export class SingleCollectionService {
  currentCol
  constructor(private http: Http, public genServe:GeneralService) { }

  url = this.genServe.url+"collection";
  //gets the collection that was sent from the home page
  showSingleCollection(a){
    this.currentCol=a;
  }

   //simple post all
   deleteCollection(id) {
    const body = {
      _id: id,
    }
    console.log("body: " +body)
    this.http.delete(this.url,new RequestOptions({
      body: body})).subscribe(
      (data: any) => {
        console.log("data: " +data)
      }
    );
    alert("Collection Deleted")
  }
  

}
