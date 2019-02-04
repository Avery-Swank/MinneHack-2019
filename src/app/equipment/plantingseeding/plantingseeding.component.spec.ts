import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantingseedingComponent } from './plantingseeding.component';

describe('PlantingseedingComponent', () => {
  let component: PlantingseedingComponent;
  let fixture: ComponentFixture<PlantingseedingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlantingseedingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlantingseedingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
