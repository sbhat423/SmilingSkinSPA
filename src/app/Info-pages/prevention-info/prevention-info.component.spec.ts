import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreventionInfoComponent } from './prevention-info.component';

describe('PreventionInfoComponent', () => {
  let component: PreventionInfoComponent;
  let fixture: ComponentFixture<PreventionInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreventionInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreventionInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
