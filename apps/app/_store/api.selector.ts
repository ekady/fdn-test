import { apiSlice } from './api.slice';
import { RootState } from './index';

export const selectEditors = (state: RootState) => apiSlice.endpoints.getData.select()(state).data?.["editor's choice"];
export const selectReviews = (state: RootState) => apiSlice.endpoints.getData.select()(state).data?.['latest review'];
export const selectArticles = (state: RootState) => apiSlice.endpoints.getData.select()(state).data?.['latest articles'];
