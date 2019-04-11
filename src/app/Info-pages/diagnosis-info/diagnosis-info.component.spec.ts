import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiagnosisInfoComponent } from './diagnosis-info.component';

describe('DiagnosisInfoComponent', () => {
  let component: DiagnosisInfoComponent;
  let fixture: ComponentFixture<DiagnosisInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiagnosisInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiagnosisInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
