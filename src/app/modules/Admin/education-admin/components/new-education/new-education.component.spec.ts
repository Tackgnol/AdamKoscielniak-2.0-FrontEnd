import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { NewEducationComponent } from './new-education.component';

describe('NewEducationComponent', () => {
  let component: NewEducationComponent;
  let fixture: ComponentFixture<NewEducationComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ NewEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
