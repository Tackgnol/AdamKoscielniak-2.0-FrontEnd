import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { SummaryElementComponent } from './summary-element.component';

describe('SummaryElementComponent', () => {
  let component: SummaryElementComponent;
  let fixture: ComponentFixture<SummaryElementComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ SummaryElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SummaryElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
