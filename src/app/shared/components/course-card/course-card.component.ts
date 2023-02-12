import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  @Input() title = 'Title';
  @Input() description = 'Description';
  @Input() authors: string[] = [];
  @Input() duration: number | null = null;
  @Input() createdAt: Date | null = null;
  @Input() editable: boolean = true;
}
