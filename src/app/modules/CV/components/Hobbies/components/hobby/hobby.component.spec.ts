import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HobbyComponent } from './hobby.component';

describe('HobbyComponent', () => {
  let component: HobbyComponent;
  let fixture: ComponentFixture<HobbyComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
