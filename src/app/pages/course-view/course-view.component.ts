import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
// import { ICourse } from 'src/app/models/course';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course-view-page',
  templateUrl: './course-view.component.html',
  styleUrls: [],
})
export class CourseViewComponent {
  isLoading$ = this.courseService.isCourseLoading$;
  course$ = this.courseService.courseById$;

  constructor(private router: ActivatedRoute, private courseService: CoursesService) {}

  ngOnInit() {
    const courseId = this.router.snapshot.paramMap.get('id');
    console.log({ courseId });
    if (courseId) {
      this.courseService.getCourseById(courseId);
    }
  }
}
