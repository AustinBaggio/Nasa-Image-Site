import { Injectable } from '@angular/core';

@Injectable()
export class SingleCollectionService {
  currentCol
  constructor() { }

  //gets the collection that was sent from the home page
  showSingleCollection(a){
    this.currentCol=a;
  }

  
}
