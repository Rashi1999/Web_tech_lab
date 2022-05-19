import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvgMarksComponent } from './avg-marks.component';

describe('AvgMarksComponent', () => {
  let component: AvgMarksComponent;
  let fixture: ComponentFixture<AvgMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvgMarksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvgMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
