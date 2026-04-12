import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'summary',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './summary.component.html',
  styleUrl: './summary.component.scss'
})
export class SummaryComponent {
  @Input() stock: any;

  isNegative() {
    return (this.stock && this.stock.change < 0)
  }

  isPositive() {
    return (this.stock && this.stock.change > 0)
  }
}
