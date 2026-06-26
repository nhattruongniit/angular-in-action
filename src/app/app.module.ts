import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StocksService } from './services/stocks.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppRoutes } from './app.routers';
import { MetricComponent } from './components/metric/metric.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    DashboardComponent,
    MetricComponent,
    AppRoutes,
    NavbarComponent
  ],
  providers: [StocksService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }