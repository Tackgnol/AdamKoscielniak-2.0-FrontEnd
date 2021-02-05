import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HobbyFormComponent } from './hobby-form.component';

describe('HobbyFormComponent', () => {
  let component: HobbyFormComponent;
  let fixture: ComponentFixture<HobbyFormComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbyFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
