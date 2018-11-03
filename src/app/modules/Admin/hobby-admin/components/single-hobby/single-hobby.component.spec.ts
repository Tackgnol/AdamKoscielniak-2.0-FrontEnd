import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleHobbyComponent } from './single-hobby.component';

describe('SingleHobbyComponent', () => {
  let component: SingleHobbyComponent;
  let fixture: ComponentFixture<SingleHobbyComponent>;

  beforeEach(async(() => {
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
