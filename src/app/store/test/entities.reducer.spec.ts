import { entitiesReducer, initialState } from "../entities.reducer";
import * as EntityActions from "../entities.actions";
import EntitiesMock from "../../test/entities-mock"

fdescribe('Entities Reducer', () => {
    it('should set loading to true when loadEntity action is dispatched', () => {
        const action = EntityActions.loadEntity();
        const newState = entitiesReducer(initialState, action);
        expect(newState.loading).toBeTrue();
    });

    it('should update entities when loadEntitySuccess action is dispatched', () => {
        const entities: any[] = [EntitiesMock.entities];

        const action = EntityActions.loadEntitySuccess({ entities });
        const newState = entitiesReducer(initialState, action);
        expect(newState.entities).toEqual(entities);
    });

    it('should update error when loadEntityFailure action is dispatched', () => {
        const error = 'An error occurred';

        const action = EntityActions.loadEntityFailure({ error });
        const newState = entitiesReducer(initialState, action);
        expect(newState.error).toEqual(error);
    });

    it('should return the current state for unknown actions', () => {
        const action = { type: 'UNKNOWN_ACTION' };
        const newState = entitiesReducer(initialState, action as any);
        expect(newState).toEqual(initialState);
    });
});