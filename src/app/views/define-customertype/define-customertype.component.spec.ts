import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DefineCustomertypeComponent } from './define-customertype.component';

describe('DefineCustomertypeComponent', () => {
  let component: DefineCustomertypeComponent;
  let fixture: ComponentFixture<DefineCustomertypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DefineCustomertypeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DefineCustomertypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
