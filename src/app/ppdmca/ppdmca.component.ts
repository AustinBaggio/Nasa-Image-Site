import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-ppdmca',
  templateUrl: './ppdmca.component.html',
  styleUrls: ['./ppdmca.component.css']
})
export class PpdmcaComponent implements OnInit {
  
  url:string = 'https://nasa-austinbaggio.c9users.io/api/message'; // Get 10 random users
  
  data: any ={};
  resp

  constructor(private http: Http) { 
    this.getStringData();
    this.getData();
  }

  ngOnInit() {
  }

  getData(){
    return this.http.get(this.url)
      .map((res: Response) => res.json())
  }
  getStringData(){
    this.getData().subscribe(data=>{
      console.log(data);
      this.data=data;
    })
  }
}
