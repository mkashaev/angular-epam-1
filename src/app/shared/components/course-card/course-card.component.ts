import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.scss'],
})
export class CourseCardComponent {
  @Input() title = '';
  @Input() description = '';
  @Input() authors: string[] = [];
  @Input() duration: number | null = null;
  @Input() createdAt: string | null = null;
  @Input() editable = true;
}
