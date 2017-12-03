import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { GeneralService } from './general.service';

@Injectable()
export class ApiCallService {

  constructor(private http: Http,) { }
  data
  disputeData

  getData(url){
    return this.http.get(url)
      .map((res: Response) => res.json())
  }
  getStringData(url){
    this.getData(url).subscribe(data=>{
      this.data=data;
      console.log(this.data[this.data.length-1]);
      
    })
  }
  getDisputeData(url){
    this.getData(url).subscribe(data=>{
      this.disputeData=data;
      console.log(this.data[this.data.length-1]);
      
    })
  }

  getLatest(){
    console.log(this.data);
    
    return (this.data[this.data.length-1]);
  }

  addNewNotice(own, def, col, url){
    const body = {
      owner: own,
      defendant: def,
      collectionURL: col,
      sentNotice: 0,
      dispute: "None"

    }


    this.http.post(url, body).subscribe(
      (data:any) =>{
        console.log(data)
      }
    );
    alert("Added to log")
    location.reload();
  }

  addNewDispute(own, disp, url){

      const body = {
        owner: own,
        dispute: disp
  
      }
  
  
      this.http.post(url, body).subscribe(
        (data:any) =>{
          console.log(data)
        }
      );
      alert("Added to log")
      location.reload();
    
  }


  getAll(){
    return this.data
  }

  
}
