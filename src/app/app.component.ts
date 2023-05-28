import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as EntitiesSelectors from "./store/entities.selectors";
import * as EntitiesActions from "./store/entities.actions";

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  entities$ = this.store.select(EntitiesSelectors.selectEntities)

  constructor(private store: Store) {

  }

  ngOnInit(): void {
    this.store.dispatch(EntitiesActions.loadEntity());
  }
}
