import { Component } from '@angular/core';
import { MenuItem } from '../menu-item.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isAuthenticated() {
    return localStorage.getItem('access');
  }
  isActive: boolean = false;
  addHeaderClass: boolean = false;
  showMenu: boolean = false;
  menu_lists: MenuItem[] = [
    {
      name: "Home",
      url: "/",
      tab: null
    },
    {
      name: "Services",
      tab: "service",
      children: [
        {
          name: "Modern Application Development",
          url: "/services/modern-application-development",
          image: "assets/navbarmenu/modern-application-development.svg",
          alt: "Modern Application Development"
        },
      ]
    },
  ];
  selectedNavItem: string | null = null;

  constructor(private router: Router) {
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  logout() {
    localStorage.removeItem('access');

    this.router.navigate(['/login']);
  }

  closeNav() {
    this.toggleMenu();
  }

  changeIcon() {
    this.toggleMenu();
  }



  
  toggleNavItemDetail(tab: string) {
    this.selectedNavItem = tab === this.selectedNavItem ? null : tab;
  }
}
