import { AfterViewInit, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockInterface, StocksService } from '../../services/stocks.service';
import { SummaryComponent } from '../summary/summary.component';

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule, SummaryComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit, AfterViewInit {
  stocks: Array<StockInterface> = []; 
  sysmbols: Array<string> = [];

  constructor(
    private service: StocksService
  ) { 
    this.sysmbols = service.get();
  }

  ngOnInit(): void {
    this.service.load().subscribe((data: any) => {
      this.stocks = data;
    });

  }

  ngAfterViewInit(): void {
  }
}
