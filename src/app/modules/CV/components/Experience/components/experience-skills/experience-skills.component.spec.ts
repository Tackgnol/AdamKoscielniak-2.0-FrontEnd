import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExperienceSkillsComponent } from './experience-skills.component';

describe('ExperienceSkillsComponent', () => {
  let component: ExperienceSkillsComponent;
  let fixture: ComponentFixture<ExperienceSkillsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
