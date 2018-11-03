import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyAdminComponent } from './hobby-admin.component';

describe('HobbyAdminComponent', () => {
  let component: HobbyAdminComponent;
  let fixture: ComponentFixture<HobbyAdminComponent>;

  beforeEach(async(() => {
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
