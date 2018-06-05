import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExperienceEntryComponent } from './experience-entry.component';

describe('ExperienceEntryComponent', () => {
  let component: ExperienceEntryComponent;
  let fixture: ComponentFixture<ExperienceEntryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceEntryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
