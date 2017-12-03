/* THis component is used to display the privacy, security and DMCA Policy
It also acts as an admin tool for changing them if you are the admin
 */
import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { GeneralService } from '../general.service';

@Component({
  selector: 'app-ppdmca',
  templateUrl: './ppdmca.component.html',
  styleUrls: ['./ppdmca.component.css']
})
export class PpdmcaComponent implements OnInit {

  //API endpoint
  url: string = 'https://nasa-austinbaggio.c9users.io/api/message';

  //local store of data for manipulation
  data: any = {};

  constructor(private http: Http, public genServe: GeneralService) {
    this.getStringData();
    this.getData();
  }

  ngOnInit() {
  }

  //simple get request
  getData() {
    return this.http.get(this.url)
      .map((res: Response) => res.json())
  }
  getStringData() {
    this.getData().subscribe(data => {
      this.data = data;
      console.log(this.data[this.data.length - 1]);

    })
  }
  //helper function to get the latest of any of the policies
  getLatest() {
    return (this.data[this.data.length - 1]);
  }

  //post function
  saveAllPolicies(priv, sec, dmca, con) {
    const body = {
      pPolicy: priv,
      sPolicy: sec,
      dmcaPolicy: dmca,
      contact: con

    }


    this.http.post(this.url, body).subscribe(
      (data: any) => {
        console.log(data)
      }
    );
    alert("Changes Saved")
    location.reload();
  }



}
