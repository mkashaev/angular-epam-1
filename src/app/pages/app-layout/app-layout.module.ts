import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AppLayoutComponent } from './app-layout.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [AppLayoutComponent],
  imports: [CommonModule, FontAwesomeModule, RouterModule, SharedModule],
  exports: [AppLayoutComponent],
})
export class AppLayoutModule {}
