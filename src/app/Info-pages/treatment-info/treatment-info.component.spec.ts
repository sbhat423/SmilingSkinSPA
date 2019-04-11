import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentInfoComponent } from './treatment-info.component';

describe('TreatmentInfoComponent', () => {
  let component: TreatmentInfoComponent;
  let fixture: ComponentFixture<TreatmentInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TreatmentInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TreatmentInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
