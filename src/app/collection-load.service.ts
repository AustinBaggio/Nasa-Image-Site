import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { GeneralService } from './general.service';

@Injectable()
export class CollectionLoadService {
  data
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
}
