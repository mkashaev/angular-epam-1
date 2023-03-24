import { createAction, props } from '@ngrx/store';
import { ICourse } from 'src/app/models/course';

// Fetch course list
export const fetchCourseList = createAction('[Course Page] FetchCourseList');
export const fetchCourseListSuccess = createAction(
  '[Course Page] FetchCourseListSuccess',
  props<{ courses: ICourse[] }>()
);
export const fetchCourseListFail = createAction('[Courses Page] FetchCourseListFail');

// Fetch course by id
export const fetchCourseById = createAction(
  '[Course View Page] FetchCourseById',
  props<{ id: string }>()
);
export const fetchCourseByIdSuccess = createAction(
  '[Course View Page] FetchCourseByIdSuccess',
  props<{ course: ICourse }>()
);
export const fetchCourseByIdFail = createAction('[Course View Page] FetchCourseByIdFail');
