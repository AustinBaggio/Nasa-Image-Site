import { Component, OnInit } from '@angular/core';
import { CollectionLoadService } from '../collection-load.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  name
  description
  visability
  owner
  imageUrls
  rating


  constructor(public colLoad:CollectionLoadService) { 
    
  }

  ngOnInit() {
  }

}
