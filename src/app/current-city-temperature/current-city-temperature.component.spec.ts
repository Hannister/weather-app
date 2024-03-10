import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CurrentCityTemperatureComponent } from './current-city-temperature.component';

describe('CurrentCityTemperatureComponent', () => {
  let component: CurrentCityTemperatureComponent;
  let fixture: ComponentFixture<CurrentCityTemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CurrentCityTemperatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CurrentCityTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
