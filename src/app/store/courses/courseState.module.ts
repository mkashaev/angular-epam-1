import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { CoursesEffects } from './courses.effects';
import { CoursesFacade } from './courses.facade';

@NgModule({
  declarations: [],
  imports: [EffectsModule.forFeature([CoursesEffects])],
  providers: [CoursesFacade],
})
export class CoursesStateModule {}
