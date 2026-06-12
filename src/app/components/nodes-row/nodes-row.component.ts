import { PercentPipe } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: '[app-nodes-row]',
  imports: [PercentPipe],
  templateUrl: './nodes-row.component.html',
  styleUrl: './nodes-row.component.scss'
})
export class NodesRowComponent {
  @Input() node: any;

  isDanger(prop: any) {
    return this.node[prop].used / this.node[prop].available > 0.7;
  }
}
