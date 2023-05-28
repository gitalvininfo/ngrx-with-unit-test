import { createReducer, on } from "@ngrx/store"
import * as EntityActions from "./entities.actions";

export const initialState: any = {
    loading: true,
    entities: [],
    error: null
}


export const entitiesReducer = createReducer(initialState,
    on(EntityActions.loadEntity, (state) => ({ ...state, loading: true })),
    on(EntityActions.loadEntitySuccess, (state, action) => ({ ...state, entities: action.entities })),
    on(EntityActions.loadEntityFailure, (state, action) => ({ ...state, error: action.error })),
)