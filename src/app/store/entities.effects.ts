import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, of, switchMap } from "rxjs";
import * as EntityActions from "./entities.actions";
import { AppService } from "../app.service";

@Injectable()

export class EntitiesEffects {

    loadEntities$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(EntityActions.loadEntity),
            switchMap(() =>
                this.appService.loadEntities().pipe(
                    map((data: any) => {
                        return EntityActions.loadEntitySuccess({ entities: data.results })
                    }),
                    catchError((error) => {
                        console.error(error)
                        return of(EntityActions.loadEntityFailure({ error }))
                    })
                )
            )
        )
    }
    )


    constructor(private actions$: Actions, private appService: AppService) {

    }

}