import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { GeneralService } from './general.service';

@Injectable()
export class CollectionLoadService {
  data
  dataS
  defaultURL = "https://nasa-austinbaggio.c9users.io/api/collection"
  constructor(private http: Http, ) {

  }
  getAllCollections(url) {

  }

  getData(url) {
    return this.http.get(url)
      .map((res: Response) => res.json())
  }
  getStringData(url) {
    this.getData(url).subscribe(data => {
      this.data = data;
      console.log(this.data)
    })
    this.getData(url).subscribe(data => {
      this.dataS = this.sortByRating(data);
      console.log(this.dataS)
      
    })
  }
  sortByRating(a) {

    for (var i = 0; i < a.length; i++) {

      if (typeof a[i].rating === 'undefined') {
        a[i].rating = 0;
      }
      if (a[i].visability === false) {
        a.splice(i, 1)
        i--;
      }
      if (a.length > 10) {
        a.splice(a.length - 1, 1)
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
    return a;

  }

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
