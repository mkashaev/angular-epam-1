import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, switchMap } from 'rxjs';
import { CoursesService } from 'src/app/services/courses.service';
import { CoursesFacade } from 'src/app/store/courses/courses.facade';

@Component({
  selector: 'app-course-view-page',
  templateUrl: './course-view.component.html',
  styleUrls: [],
})
export class CourseViewComponent {
  isLoading$ = this.courseFacade.isCourseLoading$;
  course$ = this.courseFacade.course$;

  constructor(
    private router: ActivatedRoute,
    private courseFacade: CoursesFacade,
    private courseService: CoursesService
  ) {}

  ngOnInit() {
    const courseId = this.router.snapshot.paramMap.get('id');
    console.log({ courseId });
    if (courseId) {
      this.courseFacade.getCourseById(courseId);
    }
  }
}
