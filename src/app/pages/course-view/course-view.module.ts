import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseViewComponent } from './course-view.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CourseViewComponent],
  imports: [CommonModule, SharedModule],
  exports: [CourseViewComponent],
})
export class CourseViewModule {}
