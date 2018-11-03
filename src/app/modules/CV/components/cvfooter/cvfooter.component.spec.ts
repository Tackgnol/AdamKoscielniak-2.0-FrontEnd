import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CVFooterComponent } from './cvfooter.component';

describe('CVFooterComponent', () => {
  let component: CVFooterComponent;
  let fixture: ComponentFixture<CVFooterComponent>;

  beforeEach(async(() => {
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
