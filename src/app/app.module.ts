import { Experience } from 'src/models/Experience';
import { AuthService } from './../services/auth-service.service';
import { AuthInterceptor } from './../utils/AuthInterceptor';
import { SpinnerComponent } from './../utils/components/Spinner';
import { ExperienceService } from './../services/experience-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { LaddaModule } from 'angular2-ladda';

import { FormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ExperienceComponent } from './modules/CV/components/Experience/experience.component';
import { LoginFormComponent } from './modules/Login/components/login-form/login-form.component';
import { CommonModule } from '../../node_modules/@angular/common';
import { Routes, RouterModule } from '../../node_modules/@angular/router';
import { CVMainComponent } from './modules/CV/cv.component';
import { ExperienceResponsibilitiesComponent } from './modules/CV/components/Experience/components/experience-responsibilities/experience-responsibilities.component';
import { ExperienceSkillsComponent } from './modules/CV/components/Experience/components/experience-skills/experience-skills.component';
import { ExperienceWorkTimeComponent } from './modules/CV/components/Experience/components/experience-work-time/experience-work-time.component';
import { AdminComponent } from './modules/Admin/admin.component';
import { ExperienceAdminComponent } from './modules/Admin/experience-admin/experience-admin.component';
import { LocationComponent } from './components/location/location.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'CV', component: CVMainComponent },
  { path: 'Admin', component: AdminComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    ExperienceComponent,
    LoginFormComponent,
    CVMainComponent,
    ExperienceResponsibilitiesComponent,
    ExperienceSkillsComponent,
    ExperienceWorkTimeComponent,
    AdminComponent,
    ExperienceAdminComponent,
    LocationComponent
  ],
  imports: [
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    LaddaModule.forRoot({
      style: 'expand-left',
      spinnerSize: 40,
      spinnerColor: 'white',
      spinnerLines: 12
    }),
    FlexLayoutModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  providers: [
    AuthService,
    ExperienceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
