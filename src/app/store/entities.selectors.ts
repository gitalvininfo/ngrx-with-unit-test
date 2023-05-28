import { createFeatureSelector, createSelector } from "@ngrx/store";


export const selectEntity = createFeatureSelector<any>('entities');

export const selectEntities = createSelector(selectEntity, (state) => state.entities);
export const selectLoading = createSelector(selectEntity, (state) => state.loading);
export const selectError = createSelector(selectEntity, (state) => state.error);
