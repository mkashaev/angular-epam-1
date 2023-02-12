import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';

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
  styleUrls: ['./courses.component.css'],
})
export class CoursesComponent {
  @Input() data?: IData[];
  @Input() editable?: boolean;

  @Output() onDelete = new EventEmitter<null>();
  @Output() onEdit = new EventEmitter<null>();

  infoButtonTitle = 'Add new course';

  trashIcon = faTrash;
  pencilIcon = faPencil;

  handleOnClick() {
    console.log('delet was clicked');
  }

  handleOnDelete() {
    this.onDelete.emit();
  }

  handleOnEdit() {
    this.onEdit.emit();
  }
}
