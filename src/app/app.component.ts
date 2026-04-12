import { Component, OnInit } from '@angular/core';
import { StockInterface, StocksService } from './services/stocks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false // This is not necessary if you are using the module system
})
export class AppComponent implements OnInit {
  stocks: Array<StockInterface> = [];

  constructor(
    public stockService: StocksService
  ) {
    // Initialization logic can go here
    stockService.load(['AAPL']).subscribe(stocks => {
      this.stocks = stocks
    });
  }

  ngOnInit(): void {
  }
}
