import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SingleHobbyComponent } from './single-hobby.component';

describe('SingleHobbyComponent', () => {
  let component: SingleHobbyComponent;
  let fixture: ComponentFixture<SingleHobbyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleHobbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleHobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
