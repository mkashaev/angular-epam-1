import { Action, createReducer, on } from '@ngrx/store';
import { ICourse } from 'src/app/models/course';
import * as actions from './courses.actions';

export const coursesFeatureKey = 'courses';

export interface ICoursesState {
  courseList: ICourse[];
  isCourseListLoading: boolean;
  course: ICourse | null;
  isCourseLoading: boolean;
  isSearching: boolean;
  errorMessage: string | null;
}

export const initialCoursesState: ICoursesState = {
  courseList: [],
  isCourseListLoading: false,
  course: null,
  isCourseLoading: false,
  isSearching: false,
  errorMessage: null,
};

const reducer = createReducer(
  initialCoursesState,
  on(actions.fetchCourseList, (state): ICoursesState => ({ ...state, isCourseListLoading: true })),
  on(
    actions.fetchCourseListSuccess,
    (state, { courses }): ICoursesState => ({
      ...state,
      courseList: courses,
      isCourseListLoading: false,
    })
  ),
  on(
    actions.fetchCourseListFail,
    (state): ICoursesState => ({
      ...state,
      isCourseListLoading: false,
      errorMessage: 'Fetch courses error',
    })
  ),

  on(actions.fetchCourseById, (state): ICoursesState => ({ ...state, isCourseLoading: true })),
  on(
    actions.fetchCourseByIdSuccess,
    (state, { course }): ICoursesState => ({
      ...state,
      course,
      isCourseLoading: false,
    })
  ),
  on(
    actions.fetchCourseByIdFail,
    (state): ICoursesState => ({
      ...state,
      isCourseLoading: false,
      errorMessage: 'Fetch course error',
    })
  )
);

export const coursesReducer = (state: ICoursesState | undefined, action: Action): ICoursesState =>
  reducer(state, action);
