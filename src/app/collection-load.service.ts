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

  //User collections
  dataU

  //default to collection if not passed
  defaultURL = this.genServ.url + "collection/";
  
  constructor(private http: Http, public genServ: GeneralService) {

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
    this.getData(url).subscribe(data => {
      this.dataU = this.user(data);
    })
  }

  user(a) {
    var b = new Array()
    var email = this.genServ.afAuth.auth.currentUser.email
    for (var i = 0; i < a.length; i++) {
      if (a[i].owner === email) {
        b.push(a[i])
      }
    }
    return b;
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
    var b = new Array()
    for (var i = 0; i < a.length; i++) {
      if (a[i].visability == true){
        b.push(a[i]);
      }
    }      

    for (var i = 0; i < b.length; i++) {
      
      //give undefined a rating of 0
      if (typeof b[i].rating == 'undefined') {
        b[i].rating = 0;
      }



    }
    var outer, inner;
    //bubble sort by rating
    for (outer = b.length - 1; outer > 0; outer--) {
      for (inner = 0; inner < outer; inner++) {
        if (b[inner].rating < b[inner + 1].rating) {
          var temp = b[inner];
          b[inner] = b[inner + 1];
          b[inner + 1] = temp;
        }
      }

    }
    for (var i = 0; i < a.length; i++) {

      //shorten down to ten collections
      if (b.length > 10) {
        b.pop();
      }
    }
    return b;

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
    location.replace("/home")
  }

}
