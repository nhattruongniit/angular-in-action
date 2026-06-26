import { Component, Output, EventEmitter } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  @Output() onRefresh: EventEmitter<null> = new EventEmitter<null>();

  refresh() {
    this.onRefresh.emit();
  }
}
