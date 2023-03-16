import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
// import { CoursesComponent } from './courses/courses.component';
// import { RegistrationComponent } from './registration/registration.component';
import { AppRoutingModule } from './appRouting.module';

import { LoginModule } from './pages/login/login.module';
import { RegistrationModule } from './pages/registration/registration.module';
import { AppLayoutModule } from './pages/app-layout/app-layout.module';
import { CoursesModule } from './pages/courses/courses.module';
import { CourseEditModule } from './pages/course-edit/course-edit.module';
import { CourseViewModule } from './pages/course-view/course-view.module';

import { JwtInterceptor } from './auth/interceptors/jwt.interceptor';
import { ErrorInterceptor } from './auth/interceptors/error.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    FontAwesomeModule,
    AppRoutingModule,
    LoginModule,
    RegistrationModule,
    AppLayoutModule,
    CoursesModule,
    CourseEditModule,
    CourseViewModule,
  ],
  providers: [
    { provide: Window, useValue: window },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
