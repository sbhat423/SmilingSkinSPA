import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CausesInfoComponent } from './causes-info.component';

describe('CausesInfoComponent', () => {
  let component: CausesInfoComponent;
  let fixture: ComponentFixture<CausesInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CausesInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CausesInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
