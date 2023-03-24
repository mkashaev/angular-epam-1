import { createSelector } from '@ngrx/store';
import { AppState } from '..';

// Courses Selectors
export const selectCourses = (state: AppState) => state.courses;

export const courseList = createSelector(selectCourses, (state) => state.courseList);
export const isCourseListLoading = createSelector(
  selectCourses,
  (state) => state.isCourseListLoading
);
export const errorMessage = createSelector(selectCourses, (state) => state.errorMessage);
export const isSearching = createSelector(selectCourses, (state) => state.isSearching);
export const course = createSelector(selectCourses, (state) => state.course);
export const isCourseLoading = createSelector(selectCourses, (state) => state.isCourseLoading);
