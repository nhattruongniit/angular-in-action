import { Component, OnInit, OnDestroy } from '@angular/core';
import { NodesComponent } from "../nodes/nodes.component";
import { NodesRowComponent } from "../nodes-row/nodes-row.component";
import { CommonModule } from '@angular/common';
import { MetricComponent } from '../metric/metric.component';

interface Metric {
  used: number,
  available: number
}

interface Node {
  name: string,
  cpu: Metric,
  mem: Metric
}
@Component({
  selector: 'app-dashboard',
  imports: [NodesComponent, NodesRowComponent, CommonModule, MetricComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, OnDestroy {
  cpu: Metric;
  mem: Metric;
  cluster1: Node[];
  cluster2: Node[];
  interval: any;
    
  constructor(
  ) { 
    this.cluster1 = [];
    this.cluster2 = [];
    this.cpu = {
      used: 0,
      available: 0
    };
    this.mem = {
      used: 0,
      available: 0
    };
  }

  ngOnInit(): void {
    this.generateData();

    this.interval = setInterval(() => {
      this.generateData();
    }, 15000);
  }
  
  generateData() {
    this.cluster1 = [];
    this.cluster2 = [];
    this.cpu = {
      used: 0,
      available: 0
    };
    this.mem = {
      used: 0,
      available: 0
    };
    for (let i = 1; i < 4; i++) {
      this.cluster1.push(this.randomNode(i));
    }
    for (let i = 4; i < 7; i++) {
      this.cluster1.push(this.randomNode(i));
    }
  }

  private randomNode(i: number): Node {
    let node = {
      name: 'Node' + i,
      cpu: {
        used: this.randomInteger(0, 16),
        available: 16
      },
      mem: {
        used: this.randomInteger(0, 16),
        available: 48
      }
    };
    this.cpu.used += node.cpu.used;
    this.cpu.available += node.cpu.available;
    this.mem.used += node.mem.used;
    this.mem.available += node.mem.available;

    return node;
  }

  private randomInteger(min: number = 0, max: number = 100): number {
    return Math.floor((Math.random() + min) * max) + 1;
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }
}
