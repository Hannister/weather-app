import { Component, EventEmitter, Output } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'city-selector',
  standalone: true,
  imports: [
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatButtonModule,
  ],
  templateUrl: './city-selector.component.html',
  styleUrl: './city-selector.component.scss',
})
export class CitySelectorComponent {
  cityName = new FormControl('', [Validators.required]);
  @Output() newCityName = new EventEmitter<string>();

  changeCity() {
    if (this.cityName.value) {
      this.newCityName.emit(this.cityName.value);
    }
  }
}
