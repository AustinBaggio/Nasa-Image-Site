import { Component, OnInit } from '@angular/core';
import { GeneralService } from '../general.service';
import { CollectionLoadService } from '../collection-load.service';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrls: ['./add-image.component.css']
})
export class AddImageComponent implements OnInit {

  constructor(public genServ: GeneralService, public colLoad:CollectionLoadService) { }

  ngOnInit() {
  }

  addImage(col, link){
    alert("ADDING IMAGE")
    /* Add the image link to an existing collection */
  }

}
