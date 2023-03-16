import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ModalComponent } from './components/modal/modal.component';
import {
  HeaderComponent,
  ButtonComponent,
  InfoComponent,
  SearchComponent,
  CourseCardComponent,
  LoginFormComponent,
  RegistrationFormComponent,
  CourseFormComponent,
  CourseListComponent,
  CourseViewComponent,
} from './components';
import { FormatMins } from './pipes/formatMins.pipe';

const components = [
  HeaderComponent,
  ButtonComponent,
  InfoComponent,
  SearchComponent,
  ModalComponent,
  CourseCardComponent,
  CourseListComponent,
  LoginFormComponent,
  RegistrationFormComponent,
  CourseFormComponent,
  CourseViewComponent,
];

@NgModule({
  declarations: [components, FormatMins],
  imports: [CommonModule, FontAwesomeModule, FormsModule, ReactiveFormsModule],
  exports: [components],
})
export class SharedModule {}
