import { Component, OnInit } from '@angular/core';
import { StockInterface, StocksService } from './services/stocks.service';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false // This is not necessary if you are using the module system
})
export class AppComponent implements OnInit {
  title = 'angular-scratch';
  stocks: StockInterface[] = [];
  loading = false;
  error: string | null = null;

  constructor(
    private stockService: StocksService
  ) {
    // Initialization logic can go here
    
  }

  ngOnInit(): void {
    this.getStocks();
  }

  getStocks(): void {
    this.loading = true;
    this.error = null;

    this.stockService.get().subscribe({
      next: (stocks: StockInterface[]) => {
        this.stocks = stocks;
        this.loading = false;

        console.log('Stocks loaded:', this.stocks);
      },
      error: (err: any) => {
        this.error = 'Failed to load stocks';
        console.error(err);
        this.loading = false;
      }
    })
  }
}
