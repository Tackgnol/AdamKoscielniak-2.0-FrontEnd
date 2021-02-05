import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SkillAdminComponent } from './skill-admin.component';

describe('SkillAdminComponent', () => {
  let component: SkillAdminComponent;
  let fixture: ComponentFixture<SkillAdminComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SkillAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
