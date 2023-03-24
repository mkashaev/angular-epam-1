import { Component, Input, Output, EventEmitter } from '@angular/core';
import { tap } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';
import { CoursesFacade } from 'src/app/store/courses/courses.facade';
// import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';
import { mockedCourseList } from './mocks';

interface IData {
  title: string;
  description: string;
  creationDate: Date;
  duration: number;
  authors: string[];
}

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: [],
})
export class CoursesComponent {
  isLoading$ = this.coursesFacade.isCourseListLoading$;
  courses$ = this.coursesFacade.courseList$;

  constructor(private coursesFacade: CoursesFacade) {}

  ngOnInit() {
    this.coursesFacade.getCourseList();
  }

  handleOnDelete() {
    console.log('On delete was clicked');
  }

  handleOnEdit() {
    console.log('On edit was clicked');
  }
}
