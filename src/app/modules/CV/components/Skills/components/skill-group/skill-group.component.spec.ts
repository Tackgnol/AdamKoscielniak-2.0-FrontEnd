import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SkillGroupComponent } from './skill-group.component';

describe('SkillGroupComponent', () => {
  let component: SkillGroupComponent;
  let fixture: ComponentFixture<SkillGroupComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
