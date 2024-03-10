import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'min-max-temperature',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './min-max-temperature.component.html',
  styleUrl: './min-max-temperature.component.scss',
})
export class MinMaxTemperatureComponent {
  @Input() maxTemp: number = 0;
  @Input() minTemp: number = 0;
}
