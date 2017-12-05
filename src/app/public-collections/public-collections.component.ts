import { Component, OnInit } from '@angular/core';
import { SingleCollectionService } from '../single-collection.service';
import { CollectionLoadService } from '../collection-load.service';

@Component({
  selector: 'app-public-collections',
  templateUrl: './public-collections.component.html',
  styleUrls: ['./public-collections.component.css']
})
export class PublicCollectionsComponent implements OnInit {

  constructor(public sCol:SingleCollectionService, public colLoad: CollectionLoadService) { }

  ngOnInit() {
  }

}
