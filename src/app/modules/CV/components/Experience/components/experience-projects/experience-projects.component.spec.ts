import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExperienceProjectsComponent } from './experience-projects.component';

describe('ExperienceProjectsComponent', () => {
  let component: ExperienceProjectsComponent;
  let fixture: ComponentFixture<ExperienceProjectsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceProjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceProjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
