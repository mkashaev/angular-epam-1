import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './appRouting.module';
import { JwtInterceptor } from './auth/interceptors/jwt.interceptor';
import { ErrorInterceptor } from './auth/interceptors/error.interceptor';
import { effects, reducers } from './store';
import { LoginModule } from './pages/login/login.module';
import { RegistrationModule } from './pages/registration/registration.module';
import { AppLayoutModule } from './pages/app-layout/app-layout.module';
import { CoursesModule } from './pages/courses/courses.module';
import { CourseEditModule } from './pages/course-edit/course-edit.module';
import { CourseViewModule } from './pages/course-view/course-view.module';
import { CoursesStateModule } from './store/courses/courseState.module';

const pages = [
  LoginModule,
  RegistrationModule,
  AppLayoutModule,
  CoursesModule,
  CourseEditModule,
  CourseViewModule,
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot(effects),
    CoursesStateModule,
    BrowserModule,
    HttpClientModule,
    SharedModule,
    FontAwesomeModule,
    AppRoutingModule,
    ...pages,
  ],
  providers: [
    { provide: Window, useValue: window },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
