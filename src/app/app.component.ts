import { Component } from '@angular/core';
import { mockedCourseList } from './mocks';

interface IData {
  title: string;
  description: string;
  creationDate: Date;
  duration: number;
  authors: string[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'courses-app';

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
