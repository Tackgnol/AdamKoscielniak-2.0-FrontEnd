import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ExperienceCoreComponent } from './experience-core.component';

describe('ExperienceCoreComponent', () => {
  let component: ExperienceCoreComponent;
  let fixture: ComponentFixture<ExperienceCoreComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ExperienceCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExperienceCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
