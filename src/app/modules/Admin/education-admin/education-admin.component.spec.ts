import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { EducationAdminComponent } from './education-admin.component';

describe('EducationAdminComponent', () => {
  let component: EducationAdminComponent;
  let fixture: ComponentFixture<EducationAdminComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ EducationAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EducationAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
