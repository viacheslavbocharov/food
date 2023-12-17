import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  
  navToggle(): void {
  const burgerMenu = document.getElementById("burgerMenu");

  if (burgerMenu) {
    burgerMenu.classList.toggle("header__burger-menu_active");
  }
}  
}



