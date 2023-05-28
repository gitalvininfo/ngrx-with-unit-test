import entitiesMock from "src/app/test/entities-mock";
import * as EntitiesSelectors from "../entities.selectors";
import { ENTITIES_INITIAL_STATE } from "../entities.reducer";

fdescribe('Entities Selectors', () => {
    let state: ENTITIES_INITIAL_STATE;

    beforeEach(() => {
        state = { ...entitiesMock }
    });

    it('should set 10 items', () => {
        const result = EntitiesSelectors.selectEntities.projector(state);
        expect(result.length).toBe(10)
    });

    it('should set loading to true', () => {
        const result = EntitiesSelectors.selectLoading.projector(state);
        expect(result).toBeTrue()
    });

    it('should set error to null', () => {
        const result = EntitiesSelectors.selectError.projector(state);
        expect(result).toBeNull()
    });
});