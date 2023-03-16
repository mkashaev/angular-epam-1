import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CourseEditComponent } from './course-edit.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [CourseEditComponent],
  imports: [CommonModule, SharedModule],
  exports: [CourseEditComponent],
})
export class CourseEditModule {}
