import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SymptomsInfoComponent } from './symptoms-info.component';

describe('SymptomsInfoComponent', () => {
  let component: SymptomsInfoComponent;
  let fixture: ComponentFixture<SymptomsInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SymptomsInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SymptomsInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
