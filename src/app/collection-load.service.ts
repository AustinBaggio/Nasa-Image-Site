import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { GeneralService } from './general.service';

@Injectable()
export class CollectionLoadService {
  data
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

    })
  }

  postCollection(name,desc,vis,own){
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
