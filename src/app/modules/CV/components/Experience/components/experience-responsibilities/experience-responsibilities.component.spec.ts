import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceResponsibilitiesComponent } from './experience-responsibilities.component';

describe('ExperienceResponsibilitiesComponent', () => {
  let component: ExperienceResponsibilitiesComponent;
  let fixture: ComponentFixture<ExperienceResponsibilitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceResponsibilitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceResponsibilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
