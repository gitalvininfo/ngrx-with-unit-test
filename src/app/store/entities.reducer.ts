import { createReducer, on } from "@ngrx/store"
import * as EntityActions from "./entities.actions";

export interface ENTITIES_INITIAL_STATE {
    loading: boolean;
    entities: ReadonlyArray<any>;
    error: string | null
}


export const initialState: ENTITIES_INITIAL_STATE = {
    loading: true,
    entities: [],
    error: null
}


export const entitiesReducer = createReducer(initialState,
    on(EntityActions.loadEntity, (state) => ({ ...state, loading: true })),
    on(EntityActions.loadEntitySuccess, (state, action) => ({ ...state, entities: action.entities })),
    on(EntityActions.loadEntityFailure, (state, action) => ({ ...state, error: action.error })),
)