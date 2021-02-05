import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewSkillComponent } from './new-skill.component';

describe('NewSkillComponent', () => {
  let component: NewSkillComponent;
  let fixture: ComponentFixture<NewSkillComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewSkillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewSkillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
