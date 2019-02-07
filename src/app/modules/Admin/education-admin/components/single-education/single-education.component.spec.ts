import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleEducationComponent } from './single-education.component';

describe('SingleEducationComponent', () => {
  let component: SingleEducationComponent;
  let fixture: ComponentFixture<SingleEducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleEducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
