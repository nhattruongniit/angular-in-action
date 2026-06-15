import { ChangeDetectionStrategy, Component, Input, OnChanges } from '@angular/core';
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
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class MetricComponent implements OnChanges{
  /* getter/setter methods */

  // private _value: number = 0;
  // private _max: number = 100;
    
  // constructor(
  // ) { 
  // }

  // @Input('used')
  // set value(value: number) {
  //   if (isNaN(value)) value = 0;
  //   this._value = value;
  // }

  // get value(): number {
  //   return this._value
  // }

  // @Input('available')
  // set max(max: number) {
  //   if (isNaN(max)) max = 100;
  //   this._max = max;
  // }

  // get max(): number {
  //   return this._max
  // }



  @Input('used') value: number = 0;
  @Input('available') max: number = 100;
  
  ngOnChanges(changes: any) {
    if (changes.value && isNaN(changes.value.currentValue)) this.value = 0;
    if (changes.max && isNaN(changes.max.currentValue)) this.max = 0;
  }

  isDanger() {
    return this.value / this.max > 0.7;
  }
}
