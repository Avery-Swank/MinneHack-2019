import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppequipComponent } from './appequip.component';

describe('AppequipComponent', () => {
  let component: AppequipComponent;
  let fixture: ComponentFixture<AppequipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppequipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppequipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
