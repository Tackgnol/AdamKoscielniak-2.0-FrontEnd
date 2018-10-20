import { SkillService } from 'src/services/skill-service.service';
import { EducationService } from 'src/services/education-service.service';
import { SingleEducationAdminComponent } from './modules/Admin/education-admin/components/single-education/single-education.component';
import { FilterService } from './../services/filter.service';

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

import { QuillModule } from 'ngx-quill';

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
import { MainAdminComponent } from './modules/Admin/main-admin/main-admin.component';
import { SingleExperienceComponent } from './modules/Admin/experience-admin/components/single-experience/single-experience.component';
import { NewExperienceComponent } from './modules/Admin/experience-admin/components/new-experience/new-experience.component';
import { ConfirmationModalComponent } from '../utils/components/confirmation-modal/confirmation-modal.component';
import { ModalModule, BsDropdownModule } from 'ngx-bootstrap';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ExperienceFormComponent } from './modules/Admin/experience-admin/components/experience-form/experience-form.component';
import { FilterComponent } from './modules/CV/components/filter/filter.component';
import { ProjectsComponent } from './modules/CV/components/Projects/projects.component';
import { ExperienceSingleExperienceComponent } from 'src/app/modules/CV/components/Experience/components/single-experience/experience-single-experience.component';
import { SingleEducationComponent } from './modules/CV/components/Education/components/single-education/single-education.component';
import { EducationComponent } from './modules/CV/components/Education/education.component';
import { SkillsComponent } from './modules/CV/components/Skills/skills.component';
import { EducationFormComponent } from './modules/Admin/education-admin/components/education-form/education-form.component';
import { NewEducationComponent } from './modules/Admin/education-admin/components/new-education/new-education.component';
import { EducationAdminComponent } from './modules/Admin/education-admin/education-admin.component';
import { SkillGroupComponent } from './modules/CV/components/Skills/components/skill-group/skill-group.component';
import { SingleSkillComponent } from './modules/CV/components/Skills/components/single-skill/single-skill.component';
import { SkillAdminComponent } from './modules/Admin/skill-admin/skill-admin.component';
import { SkillFormComponent } from './modules/Admin/skill-admin/components/skill-form/skill-form.component';
import { NewSkillComponent } from './modules/Admin/skill-admin/components/new-skill/new-skill.component';
import { SingleSkillAdminComponent } from './modules/Admin/skill-admin/components/single-skill/single-skill.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'CV', component: CVMainComponent },
  {
    path: 'Admin',
    component: AdminComponent,
    children: [
      { path: '', component: MainAdminComponent },
      { path: 'Experience', component: ExperienceAdminComponent },
      { path: 'Education', component: EducationAdminComponent },
      { path: 'Skill', component: SkillAdminComponent }
    ]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    ExperienceComponent,
    ExperienceSingleExperienceComponent,
    LoginFormComponent,
    CVMainComponent,
    ExperienceResponsibilitiesComponent,
    ExperienceSkillsComponent,
    ExperienceWorkTimeComponent,
    AdminComponent,
    ExperienceAdminComponent,
    LocationComponent,
    MainAdminComponent,
    SingleExperienceComponent,
    NewExperienceComponent,
    ConfirmationModalComponent,
    ExperienceFormComponent,
    FilterComponent,
    ProjectsComponent,
    SingleEducationComponent,
    SingleEducationAdminComponent,
    EducationComponent,
    SkillsComponent,
    EducationFormComponent,
    NewEducationComponent,
    EducationAdminComponent,
    SkillGroupComponent,
    SingleSkillComponent,
    SkillAdminComponent,
    SkillFormComponent,
    NewSkillComponent,
    SingleSkillAdminComponent
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
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    QuillModule,
    FlexLayoutModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule
  ],
  entryComponents: [ConfirmationModalComponent],
  providers: [
    AuthService,
    ExperienceService,
    EducationService,
    SkillService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    FilterService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
