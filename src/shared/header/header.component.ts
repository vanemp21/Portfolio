import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [TranslateModule, NgIf],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isOpen = false;
  isFixedMenuVisible = false;

  toggleMenu() {
    this.isOpen = !this.isOpen;
    this.isFixedMenuVisible = this.isOpen;


  }
}
