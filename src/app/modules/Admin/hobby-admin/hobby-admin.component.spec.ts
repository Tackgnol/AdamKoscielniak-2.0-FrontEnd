import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HobbyAdminComponent } from './hobby-admin.component';

describe('HobbyAdminComponent', () => {
  let component: HobbyAdminComponent;
  let fixture: ComponentFixture<HobbyAdminComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HobbyAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HobbyAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
