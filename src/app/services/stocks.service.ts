import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';

let stocks: Array<string> = ['AAPL', 'GOOGL', 'FB', 'AMZN', 'TWTR'];
let service: string = 'http://localhost:3000';

export interface StockInterface {
  symbol: string;
  lastTradePriceOnly: number;
  change: number;
  changePercent: number;
}

@Injectable({
  providedIn: 'root'
})
export class StocksService {
  constructor(private http: HttpClient) { 
  }

  get() {
    return this.http.get<StockInterface[]>(`${service}/stocks`);
  }

  add(stock: string) {
    stocks.push(stock);
    return this.get();
  }

  remove(stock: string) {
    stocks.splice(stocks.indexOf(stock), 1);
    return this.get();
  }

  load(symbols: Array<string>) {
    return this.get().pipe(
      map((stocks: StockInterface[]) => stocks.filter(stock => symbols.includes(stock.symbol)))
    );
  }
}
