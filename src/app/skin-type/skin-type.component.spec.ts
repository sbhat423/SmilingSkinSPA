import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinTypeComponent } from './skin-type.component';

describe('SkinTypeComponent', () => {
  let component: SkinTypeComponent;
  let fixture: ComponentFixture<SkinTypeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkinTypeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
