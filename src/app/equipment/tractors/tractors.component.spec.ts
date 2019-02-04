import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TractorsComponent } from './tractors.component';

describe('TractorsComponent', () => {
  let component: TractorsComponent;
  let fixture: ComponentFixture<TractorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TractorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TractorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
