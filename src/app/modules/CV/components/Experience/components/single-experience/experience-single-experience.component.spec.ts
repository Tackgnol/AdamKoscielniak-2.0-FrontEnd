import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceSingleExperienceComponent } from './experience-single-experience.component';

describe('SingleExperienceComponent', () => {
  let component: ExperienceSingleExperienceComponent;
  let fixture: ComponentFixture<ExperienceSingleExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ExperienceSingleExperienceComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceSingleExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
