import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentsubmissionsComponent } from './recentsubmissions.component';

describe('RecentsubmissionsComponent', () => {
  let component: RecentsubmissionsComponent;
  let fixture: ComponentFixture<RecentsubmissionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecentsubmissionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecentsubmissionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
