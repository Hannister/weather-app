import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { TemperatureToggleComponent } from './temperature-toggle/temperature-toggle.component';

@Component({
  selector: 'toolbar-header',
  standalone: true,
  templateUrl: './toolbar-header.component.html',
  styleUrl: './toolbar-header.component.scss',
  imports: [MatToolbarModule, MatIconModule, TemperatureToggleComponent],
})
export class ToolbarHeaderComponent {}
