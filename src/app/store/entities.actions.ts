import { createAction, props } from "@ngrx/store";


export const loadEntity = createAction("[Entity] Load Entity");
export const loadEntitySuccess = createAction("[Entity] Load Entity Success", props<{ entities: any[] }>());
export const loadEntityFailure = createAction("[Entity] Load Entity Failure", props<{ error: string }>());
