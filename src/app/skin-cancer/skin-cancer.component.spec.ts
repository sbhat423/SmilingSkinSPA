import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinCancerComponent } from './skin-cancer.component';

describe('SkinCancerComponent', () => {
  let component: SkinCancerComponent;
  let fixture: ComponentFixture<SkinCancerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkinCancerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinCancerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
