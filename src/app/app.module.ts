import { AuthGuard } from './../utils/AuthGuard';
import { ExperienceProjectsComponent } from './modules/CV/components/Experience/components/experience-projects/experience-projects.component';
import { SkillService } from 'src/services/skill-service.service';
import { EducationService } from 'src/services/education-service.service';
import { SingleEducationAdminComponent } from './modules/Admin/education-admin/components/single-education/single-education.component';
import { FilterService } from './../services/filter.service';
import { NouisliderModule } from 'ng2-nouislider';
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

import { AppComponent } from './app.component';
import { DragScrollModule } from 'ngx-drag-scroll';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ExperienceComponent } from './modules/CV/components/Experience/experience.component';
import { LoginFormComponent } from './modules/Login/components/login-form/login-form.component';
import { CommonModule, DatePipe } from '../../node_modules/@angular/common';
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
import { HobbiesComponent } from './modules/CV/components/Hobbies/hobbies.component';
import { HobbyComponent } from './modules/CV/components/Hobbies/components/hobby/hobby.component';
import { HobbyAdminComponent } from './modules/Admin/hobby-admin/hobby-admin.component';
import { NewHobbyComponent } from './modules/Admin/hobby-admin/components/new-hobby/new-hobby.component';
import { HobbyFormComponent } from './modules/Admin/hobby-admin/components/hobby-form/hobby-form.component';
import { SingleHobbyComponent } from './modules/Admin/hobby-admin/components/single-hobby/single-hobby.component';
import { MainComponent } from './modules/Main/main.component';
import { MenuComponent } from './modules/Menu/menu.component';
import { BackdropComponent } from './modules/Main/components/backdrop/backdrop.component';
import { HelloComponent } from './modules/Main/components/hello/hello.component';
import { MoreComponent } from './modules/Main/components/more/more.component';
import { ExperienceCoreComponent } from './modules/CV/components/Experience/components/single-experience/experience-core/experience-core.component';
import { SummaryComponent } from './modules/Main/components/summary/summary.component';
import { SummaryElementComponent } from './modules/Main/components/summary/components/summary-element/summary-element.component';
import { CVFooterComponent } from './modules/CV/components/cvfooter/cvfooter.component';
import { DownloadCvComponent } from './components/download-cv/download-cv.component';
import { ThemeSelectorComponent } from './modules/theme-selector/theme-selector.component';
import { FilterComponent } from './modules/CV/components/filter/filter.component';


const appRoutes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: '', component: CVMainComponent },
  {
    path: 'Admin',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      { path: '', component: MainAdminComponent },
      { path: 'Experience', component: ExperienceAdminComponent },
      { path: 'Education', component: EducationAdminComponent },
      { path: 'Skill', component: SkillAdminComponent },
      { path: 'Hobby', component: HobbyAdminComponent }
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
    SingleSkillAdminComponent,
    HobbiesComponent,
    HobbyComponent,
    HobbyAdminComponent,
    NewHobbyComponent,
    HobbyFormComponent,
    SingleHobbyComponent,
    MainComponent,
    MenuComponent,
    BackdropComponent,
    HelloComponent,
    MoreComponent,
    ExperienceCoreComponent,
    ExperienceProjectsComponent,
    SummaryComponent,
    SummaryElementComponent,
    CVFooterComponent,
    DownloadCvComponent,
    ThemeSelectorComponent,
    FilterComponent
  ],
  imports: [
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled'
    }),
    LaddaModule.forRoot({
      style: 'expand-left',
      spinnerSize: 40,
      spinnerColor: 'white',
      spinnerLines: 12
    }),
    DragScrollModule,
    ModalModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    QuillModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CommonModule,
    NouisliderModule
  ],
  entryComponents: [ConfirmationModalComponent],
  providers: [
    AuthService,
    AuthGuard,
    ExperienceService,
    EducationService,
    SkillService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    FilterService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
