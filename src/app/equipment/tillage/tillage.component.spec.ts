import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TillageComponent } from './tillage.component';

describe('TillageComponent', () => {
  let component: TillageComponent;
  let fixture: ComponentFixture<TillageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TillageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TillageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
