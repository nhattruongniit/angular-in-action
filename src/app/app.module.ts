import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StocksService } from './services/stocks.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutes } from './app.routers';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DashboardComponent,
    AppRoutes
  ],
  providers: [StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }