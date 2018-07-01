import { SpinnerComponent } from './../utils/components/Spinner';
import { ExperienceService } from './../services/experience-service.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ExperienceEntryComponent } from './experience-entry/experience-entry.component';

import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [AppComponent, ExperienceEntryComponent, SpinnerComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [ExperienceService],
  bootstrap: [AppComponent]
})
export class AppModule {}
