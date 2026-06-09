import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@Component({
  selector: 'app-metric',
  standalone: true,
  imports: [CommonModule, MatCardModule, MatButtonModule, MatProgressBarModule],
  templateUrl: './metric.component.html',
  styleUrl: './metric.component.scss',
})

export class MetricComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input('used') value: number = 0;
  @Input('available') max: number = 100;
    
  constructor(
  ) { 
  }

  isDanger() {
    return this.value / this.max > 0.7;
  }
}
