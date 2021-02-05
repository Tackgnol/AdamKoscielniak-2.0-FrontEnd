import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExperienceAdminComponent } from './experience-admin.component';

describe('ExperienceAdminComponent', () => {
  let component: ExperienceAdminComponent;
  let fixture: ComponentFixture<ExperienceAdminComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
