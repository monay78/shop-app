import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'guitars-list',
  templateUrl: './guitars-list.component.html',
  styleUrls: ['./guitars-list.component.css']
})
export class GuitarsListComponent implements OnInit {
  guitarsObservable: Observable<any[]>;

  constructor(private db: AngularFireDatabase) { }

  ngOnInit() {
    this.guitarsObservable = this.getGuitars('/guitars');
  }

  getGuitars(listPath): Observable<any[]> {
    return this.db.list(listPath).valueChanges();
  }

}
