import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SingleSkillComponent } from './single-skill.component';

describe('SingleSkillComponent', () => {
  let component: SingleSkillComponent;
  let fixture: ComponentFixture<SingleSkillComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
