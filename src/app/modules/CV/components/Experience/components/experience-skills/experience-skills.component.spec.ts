import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceSkillsComponent } from './experience-skills.component';

describe('ExperienceSkillsComponent', () => {
  let component: ExperienceSkillsComponent;
  let fixture: ComponentFixture<ExperienceSkillsComponent>;

  beforeEach(async(() => {
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
