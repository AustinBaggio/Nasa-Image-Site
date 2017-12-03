import { Component } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { GeneralService } from './general.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //gives access to firebase's firestore and the service GeneralService
  items: Observable<any[]>;
  constructor(db: AngularFirestore, public genServe: GeneralService) {
    this.items = db.collection('items').valueChanges();
  }


}