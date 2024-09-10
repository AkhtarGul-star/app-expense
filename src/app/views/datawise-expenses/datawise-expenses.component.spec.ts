import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatawiseExpensesComponent } from './datawise-expenses.component';

describe('DatawiseExpensesComponent', () => {
  let component: DatawiseExpensesComponent;
  let fixture: ComponentFixture<DatawiseExpensesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatawiseExpensesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatawiseExpensesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
