import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DayCardForecastComponent } from './day-card-forecast.component';

describe('DayCardForecastComponent', () => {
  let component: DayCardForecastComponent;
  let fixture: ComponentFixture<DayCardForecastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DayCardForecastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DayCardForecastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
