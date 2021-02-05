import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExperienceFormComponent } from './experience-form.component';

describe('ExperienceFormComponent', () => {
  let component: ExperienceFormComponent;
  let fixture: ComponentFixture<ExperienceFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
