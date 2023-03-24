import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '..';
import * as actions from './courses.actions';
import * as selectors from './courses.selectors';

@Injectable()
export class CoursesFacade {
  courseList$ = this.store.select(selectors.courseList);
  isCourseListLoading$ = this.store.select(selectors.isCourseListLoading);

  course$ = this.store.select(selectors.course);
  isCourseLoading$ = this.store.select(selectors.isCourseLoading);

  isSearching$ = this.store.select(selectors.isSearching);
  errorMessage$ = this.store.select(selectors.errorMessage);

  constructor(private store: Store<AppState>) {}

  getCourseList() {
    this.store.dispatch(actions.fetchCourseList());
  }

  getCourseById(id: string) {
    this.store.dispatch(actions.fetchCourseById({ id }));
  }
}
