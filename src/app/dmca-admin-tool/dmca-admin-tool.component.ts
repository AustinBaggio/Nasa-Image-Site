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

  url:string = 'https://nasa-austinbaggio.c9users.io/api/dmcaNotice'; 
  urlDispute:string = 'https://nasa-austinbaggio.c9users.io/api/disputes'; 
  
  data: any ={};
  disputeData: any={}
  

  constructor(private http: Http, public genServe:GeneralService, public api:ApiCallService) { 
    api.getStringData(this.url);
    api.getData(this.url);

    api.getDisputeData(this.urlDispute);
    api.getData(this.urlDispute);
  }
  
  ngOnInit() {
  }

  getData(){
   return this.data 
  }

  addDispute(ownerD, dispute)
  {
    ownerD=this.genServe.sanatization(ownerD)
    dispute=this.genServe.sanatization(dispute)
    this.api.addNewDispute(ownerD,dispute, this.urlDispute)
  }
  addNotice(own, def, col){
    own=this.genServe.sanatization(own)
    def=this.genServe.sanatization(def)
    col=this.genServe.sanatization(col)
    
    this.api.addNewNotice(own, def, col, this.url)

  }

}
