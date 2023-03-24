import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, mergeMap, map, tap } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';
import * as actions from './courses.actions';

@Injectable()
export class CoursesEffects {
  constructor(private actions$: Actions, private courseSevice: CoursesService) {}

  courseList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.fetchCourseList),
      mergeMap(() =>
        this.courseSevice.getAllObservable().pipe(
          map((response) => actions.fetchCourseListSuccess({ courses: response.result })),
          catchError(() => EMPTY)
        )
      )
    )
  );

  courseById$ = createEffect(() =>
    this.actions$.pipe(
      ofType(actions.fetchCourseById),
      mergeMap(({ id }) =>
        this.courseSevice.getCourseByIdObservable(id).pipe(
          map((response) => actions.fetchCourseByIdSuccess({ course: response.result })),
          catchError(() => EMPTY)
        )
      )
    )
  );
}
