import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-course-view',
  templateUrl: './course-view.component.html',
  styleUrls: [],
})
export class CourseViewComponent {
  constructor(private router: Router) {}

  @Input() title = '';
  @Input() description = '';
  @Input() id = '';
  @Input() duration: number | null = null;
  @Input() createdAt: string | null = null;
  @Input() authors: string[] = [];

  onBack() {
    this.router.navigate(['..']);
  }
}
