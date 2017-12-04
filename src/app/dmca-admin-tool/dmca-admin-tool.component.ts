/* This component controlls the dmca admin tool. the HTML is written in such a way that
only the admin account at admin@admin.admin will be able to access it

It is mainly for logging disputes and dmca notices

*/

import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { GeneralService } from '../general.service';
import { ApiCallService } from '../api-call.service';

@Component({
  selector: 'app-dmca-admin-tool',
  templateUrl: './dmca-admin-tool.component.html',
  styleUrls: ['./dmca-admin-tool.component.css']
})
export class DmcaAdminToolComponent implements OnInit {

  //Urls for the location in the mondo DB of the dmcaNotices and disputes
  url: string = this.genServe.url+'dmcaNotice';
  urlDispute: string = this.genServe+'disputes';

  //local data returned from the get requests
  data: any = {};
  disputeData: any = {}


  constructor(private http: Http, public genServe: GeneralService, public api: ApiCallService) {
    //getting data from api service helper
    api.getStringData(this.url);
    api.getData(this.url);

    api.getDisputeData(this.urlDispute);
    api.getData(this.urlDispute);
  }

  ngOnInit() {
  }

  //simple get 
  getData() {
    return this.data
  }

  //function to add a disput
  addDispute(ownerD, dispute) {
    //sanatizing all input
    ownerD = this.genServe.sanatization(ownerD)
    dispute = this.genServe.sanatization(dispute)

    //calling post in service
    this.api.addNewDispute(ownerD, dispute, this.urlDispute)
  }
  addNotice(own, def, col) {

    //sanatizinginput
    own = this.genServe.sanatization(own)
    def = this.genServe.sanatization(def)
    col = this.genServe.sanatization(col)

    //calling post in service
    this.api.addNewNotice(own, def, col, this.url)

  }

}
