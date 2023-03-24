import { ActionReducerMap } from '@ngrx/store';
import { coursesReducer, ICoursesState } from './courses/courses.reducer';

export interface AppState {
  courses: ICoursesState;
}

export const reducers: ActionReducerMap<AppState> = {
  courses: coursesReducer,
};

export const effects = {};
