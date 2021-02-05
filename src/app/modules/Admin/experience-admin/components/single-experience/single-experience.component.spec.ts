import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SingleExperienceComponent } from './single-experience.component';

describe('SingleExperienceComponent', () => {
  let component: SingleExperienceComponent;
  let fixture: ComponentFixture<SingleExperienceComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
