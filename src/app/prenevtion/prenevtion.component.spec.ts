import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrenevtionComponent } from './prenevtion.component';

describe('PrenevtionComponent', () => {
  let component: PrenevtionComponent;
  let fixture: ComponentFixture<PrenevtionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrenevtionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrenevtionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
