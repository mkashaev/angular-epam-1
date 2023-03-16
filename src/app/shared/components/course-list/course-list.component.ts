import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';
import { ICourse } from '../../../models/course';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: [],
})
export class CourseListComponent {
  constructor(private router: Router) {}

  @Input() data: ICourse[] | null = [];
  @Input() isLoading: boolean | null = false;
  @Input() editable?: boolean;

  @Output() onDelete = new EventEmitter<null>();
  @Output() onEdit = new EventEmitter<null>();

  infoButtonTitle = 'Add new course';

  trashIcon = faTrash;
  pencilIcon = faPencil;

  handleOnShow(id: string) {
    this.router.navigate(['courses', id]);
  }

  handleOnDelete() {
    this.onDelete.emit();
  }

  handleOnEdit() {
    this.onEdit.emit();
  }

  handleOnSearch(value?: string) {
    console.log({ value });
  }
}
