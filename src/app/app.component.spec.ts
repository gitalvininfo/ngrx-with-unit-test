import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import { AppComponent } from './app.component';
import { ENTITIES_INITIAL_STATE } from './store/entities.reducer';
import * as EntitiesSelectors from "./store/entities.selectors";
import * as EntitiesActions from "./store/entities.actions";
import EntitiesMock from "./test/entities-mock";

fdescribe('AppComponent', () => {
  let store: MockStore<ENTITIES_INITIAL_STATE>;
  let component: AppComponent;

  let fixture: ComponentFixture<AppComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        provideMockStore({
          selectors: [{
            selector: EntitiesSelectors.selectEntities,
            value: EntitiesMock.entities
          }]
        })
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    store = TestBed.inject(MockStore);
    fixture.detectChanges();
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });


  it('should subscribe to entities', (done) => {
    const mockEntities = EntitiesMock.entities;
    store.overrideSelector(EntitiesSelectors.selectEntities, mockEntities);
    fixture.detectChanges();

    component.entities$.subscribe((entities) => {
      expect(entities).toEqual(mockEntities);
      done();
    })
  })

});
