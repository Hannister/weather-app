import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MinMaxTemperatureComponent } from './min-max-temperature.component';

describe('MinMaxTemperatureComponent', () => {
  let component: MinMaxTemperatureComponent;
  let fixture: ComponentFixture<MinMaxTemperatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MinMaxTemperatureComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MinMaxTemperatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
