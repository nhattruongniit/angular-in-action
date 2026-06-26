import { Component, ViewChild } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: false // This is not necessary if you are using the module system
})
export class AppComponent {
  @ViewChild(DashboardComponent) dashboard: DashboardComponent;

  refresh() {
    this.dashboard.generateData();
  }
}
