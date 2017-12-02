import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ppdmca',
  templateUrl: './ppdmca.component.html',
  styleUrls: ['./ppdmca.component.css']
})
export class PpdmcaComponent implements OnInit {
  
  url:string = 'https://lab3-austinbaggio.c9users.io/api/message'; // Get 10 random users


  constructor() { }

  ngOnInit() {
  }

}
