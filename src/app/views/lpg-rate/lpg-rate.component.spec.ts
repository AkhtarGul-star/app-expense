import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LpgRateComponent } from './lpg-rate.component';

describe('LpgRateComponent', () => {
  let component: LpgRateComponent;
  let fixture: ComponentFixture<LpgRateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LpgRateComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LpgRateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
