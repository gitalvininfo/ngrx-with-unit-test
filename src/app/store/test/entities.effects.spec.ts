import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of, throwError } from 'rxjs';
import { EntitiesEffects } from '../entities.effects';
import { AppService } from 'src/app/app.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import entitiesMock from 'src/app/test/entities-mock';
import * as EntitiesActions from "../entities.actions";

fdescribe('EntitiesEffects', () => {
  let actions$: Observable<any>;
  let effects: EntitiesEffects;
  let appService: AppService

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        EntitiesEffects,
        provideMockActions(() => actions$)
      ]
    });

    appService = TestBed.inject(AppService);
    effects = TestBed.inject(EntitiesEffects);
  });

  it('should be created EntitiesEffects', () => {
    expect(effects).toBeTruthy();
  });

  it("should call loadEntity and redirect to loadEntitySuccess action", (done) => {
    spyOn(appService, "loadEntities").and.returnValue(of({ results: entitiesMock.entities }))
    actions$ = of(EntitiesActions.loadEntity);
    effects.loadEntities$.subscribe(res => {
      expect(appService.loadEntities).toHaveBeenCalled()
      expect(res).toEqual(EntitiesActions.loadEntitySuccess({ entities: entitiesMock.entities }))
      done()
    })
  })

  it('should call loadEntity and dispatch loadEntityFailure action on error', (done) => {
    const error = 'An error occurred';
    spyOn(appService, 'loadEntities').and.returnValue(throwError(() => error));
    actions$ = of(EntitiesActions.loadEntity());

    const completion = EntitiesActions.loadEntityFailure({ error });


    effects.loadEntities$.subscribe((result) => {
      expect(appService.loadEntities).toHaveBeenCalled();
      expect(result).toEqual(completion);
      done();
    });
  });

});
