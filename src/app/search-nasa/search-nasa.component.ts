import { Component, OnInit } from '@angular/core';
import { CollectionLoadService } from '../collection-load.service';
import { Alert } from 'selenium-webdriver';

@Component({
  selector: 'app-search-nasa',
  templateUrl: './search-nasa.component.html',
  styleUrls: ['./search-nasa.component.css']
})
export class SearchNasaComponent implements OnInit {

  constructor(public colServ:CollectionLoadService) { }

  allResults 
  tenResults
  currentPage
  ngOnInit() {
    
  }
  sendQuery(a) {
    a = a ? a : 'nasa';
    this.colServ.getNasaCollections(a)
      .subscribe(
        res => {
          const resLength = res.collection.items.length < 10 ? res.collection.items.length : 10;
          this.allResults = res.collection.items;
          const nasaObjects: any[] = res.collection.items.slice(0, resLength);

          this.setImages(nasaObjects);

        });
  }

  setImages(nasaObject){
    console.log("NasaOject : ", nasaObject)
    this.tenResults=nasaObject;
    this.currentPage = 0;
  }
  nextTen(){
    
    if (this.currentPage+10>this.allResults.length){
      console.log("END")
      return
    }
    this.currentPage = this.currentPage +10
    
    this.tenResults=this.allResults.slice(this.currentPage, this.currentPage+10) 
  }
  prevTen(){
    
    if (this.currentPage<=0){
      return
    }
    this.currentPage = this.currentPage -10
    
    this.tenResults=this.allResults.slice(this.currentPage, this.currentPage+10) 
    
  }

}
