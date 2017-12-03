/* This service acts as a common api tool in order to get and post data to my database running on c9 */

import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { GeneralService } from './general.service';

@Injectable()
export class ApiCallService {

  constructor(private http: Http, ) { }

  data
  disputeData

  //simple get request functions
  getData(url) {
    return this.http.get(url)
      .map((res: Response) => res.json())
  }
  getStringData(url) {
    this.getData(url).subscribe(data => {
      this.data = data;
      console.log(this.data[this.data.length - 1]);

    })
  }
  getDisputeData(url) {
    this.getData(url).subscribe(data => {
      this.disputeData = data;
      console.log(this.data[this.data.length - 1]);

    })
  }
  //get  helpers
  getAll() {
    return this.data
  }

  getLatest() {
    return (this.data[this.data.length - 1]);
  }

  //post a notice 
  addNewNotice(own, def, col, url) {
    const body = {
      owner: own,
      defendant: def,
      collectionURL: col,
      sentNotice: 0,
      dispute: "None"
    }
    this.http.post(url, body).subscribe(
      (data: any) => {
        console.log(data)
      }
    );
    alert("Added to log")
    location.reload();
  }

  //post a dispute
  addNewDispute(own, disp, url) {
    const body = {
      owner: own,
      dispute: disp
    }
    this.http.post(url, body).subscribe(
      (data: any) => {
        console.log(data)
      }
    );
    alert("Added to log")
    location.reload();
  }

}
