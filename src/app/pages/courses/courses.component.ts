import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CoursesService } from 'src/app/services/courses.service';
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
  isLoading$ = this.coursesServices.isLoading$;
  courses$ = this.coursesServices.courses$;

  constructor(private coursesServices: CoursesService) {}

  ngOnInit() {
    this.coursesServices.getAll();
  }

  data: IData[] = mockedCourseList.map((elem) => ({
    ...elem,
    creationDate: new Date(elem.creationDate),
  }));

  handleOnDelete() {
    console.log('On delete was clicked');
  }

  handleOnEdit() {
    console.log('On edit was clicked');
  }
}
