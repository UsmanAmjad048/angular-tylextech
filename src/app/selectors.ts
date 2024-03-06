// selectors.ts
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const selectDataState = createFeatureSelector<boolean>('data');

export const selectData = createSelector(
  selectDataState,
  (state: boolean) => state
);
