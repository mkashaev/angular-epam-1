import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegistrationComponent } from './pages/registration/registration.component';
import { AppLayoutComponent } from './pages/app-layout/app-layout.component';
import { CoursesComponent } from './pages/courses/courses.component';
import { CourseEditComponent } from './pages/course-edit/course-edit.component';
import { CourseViewComponent } from './pages/course-view/course-view.component';
import { AuthGuard } from './auth/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      { path: '', redirectTo: '/courses', pathMatch: 'full' },
      {
        path: 'courses',
        loadChildren: () =>
          import('./pages/courses/courses.module').then((module) => module.CoursesModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'courses/add',
        component: CourseEditComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'courses/edit/:id',
        component: CourseEditComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'courses/:id',
        component: CourseViewComponent,
        canActivate: [AuthGuard],
      },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
