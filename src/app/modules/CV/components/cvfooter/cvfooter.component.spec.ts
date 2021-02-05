import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CVFooterComponent } from './cvfooter.component';

describe('CVFooterComponent', () => {
  let component: CVFooterComponent;
  let fixture: ComponentFixture<CVFooterComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CVFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CVFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
