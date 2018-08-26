import { AuthService } from './../services/auth-service.service';
import { AuthInterceptor } from './../utils/AuthInterceptor';
import { SpinnerComponent } from './../utils/components/Spinner';
import { ExperienceService } from './../services/experience-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';

import { FormsModule } from '@angular/forms';

import { ToastrModule } from 'ngx-toastr';

import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatInputModule,
  MatTableModule,
  MatToolbarModule,
  MatMenuModule,
  MatIconModule,
  MatProgressSpinnerModule
} from '@angular/material';
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ExperienceEntryComponent } from './modules/CV/components/Experience/components/experience-entry/experience-entry.component';
import { LoginFormComponent } from './modules/Login/components/login-form/login-form.component';
import { CommonModule } from '../../node_modules/@angular/common';
import { Routes, RouterModule } from '../../node_modules/@angular/router';
import { CVMainComponent } from './modules/CV/cv.component';

const appRoutes: Routes = [
  { path: 'login', component: LoginFormComponent },
  { path: 'CV', component: CVMainComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    ExperienceEntryComponent,
    LoginFormComponent,
    CVMainComponent
  ],
  imports: [
    ToastrModule.forRoot(),
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatTableModule,
    MatMenuModule,
    MatIconModule,
    MatProgressSpinnerModule
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
