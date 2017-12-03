import { Injectable } from '@angular/core';

@Injectable()
export class SingleCollectionService {
  currentColId
  constructor() { }
  showSingleCollection(a){
    this.currentColId=a;
  }

  
}
