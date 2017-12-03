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
  
  data: any ={};
  

  constructor(private http: Http, public genServe:GeneralService, public api:ApiCallService) { 
    api.getStringData(this.url);
    api.getData(this.url);
  }
  
  ngOnInit() {
  }

  getData(){
   return this.data 
  }

  addNotice(own, def, col){
    this.api.addNewDispute(own, def, col, this.url)

  }

}
