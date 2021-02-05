import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExperienceWorkTimeComponent } from './experience-work-time.component';

describe('ExperienceWorkTimeComponent', () => {
  let component: ExperienceWorkTimeComponent;
  let fixture: ComponentFixture<ExperienceWorkTimeComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceWorkTimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceWorkTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
