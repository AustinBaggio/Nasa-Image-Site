/* This services helps with retreiving collections from the database */
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { GeneralService } from './general.service';

@Injectable()
export class CollectionLoadService {
  //all collections
  data

  //10 collections sorted by ranking descending
  dataS

  //default to collection if not passed
  defaultURL = "https://nasa-austinbaggio.c9users.io/api/collection"
  constructor(private http: Http, ) {

  }

  //simple get
  getData(url) {
    return this.http.get(url)
      .map((res: Response) => res.json())
  }
  getStringData(url) {
    //two subscribes since data is beingstored twice
    this.getData(url).subscribe(data => {
      this.data = this.clean(data);
    })
    this.getData(url).subscribe(data => {
      this.dataS = this.sortByRating(data);

    })
  }

  //adds a rating of 0 for all collections that have not been rated yet
  clean(a) {
    for (var i = 0; i < a.length; i++) {

      if (typeof a[i].rating === 'undefined') {
        a[i].rating = 0;
      }
    }
    return a;
  }

  //sort function
  sortByRating(a) {

    for (var i = 0; i < a.length; i++) {
      //give undefined a rating of 0
      if (typeof a[i].rating === 'undefined') {
        a[i].rating = 0;
      }
      //remove all private collections
      if (a[i].visability === false) {
        a.splice(i, 1)
        i--;
      }

    }

    console.log(a);
    var outer, inner;
    //bubble sort by rating
    for (outer = a.length - 1; outer > 0; outer--) {
      for (inner = 0; inner < outer; inner++) {
        if (a[inner].rating < a[inner + 1].rating) {
          var temp = a[inner];
          a[inner] = a[inner + 1];
          a[inner + 1] = temp;
        }
      }

    }
    for (var i = 0; i < a.length; i++) {

      //shorten down to ten collections
      if (a.length > 10) {
        a.splice(a.length - 1, 1)
      }
    }
    return a;

  }

  //simple post all
  postCollection(name, desc, vis, own) {
    const body = {
      name: name,
      descript: desc,
      visability: vis,
      owner: own
    }
    this.http.post(this.defaultURL, body).subscribe(
      (data: any) => {
        console.log(data)
      }
    );
    alert("Collection Added")
    location.reload();
  }

}
