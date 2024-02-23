import { Component } from '@angular/core';
import { MenuItem } from '../menu-item.model';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isActive: boolean = false;
  addHeaderClass: boolean = false;
  showMenu: boolean = false;

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  closeNav() {
    this.toggleMenu();
  }

  changeIcon() {
    this.toggleMenu();
  }
  menu_lists: MenuItem[] = [
    {
      name: "Home",
      url: "/",
      tab: null
    },
    // {
    //   name: "Services",
    //   tab: "service",
    //   children: [
    //     {
    //       name: "Modern Application Development",
    //       url: "/services/modern-application-development",
    //       image: "assets/navbarmenu/modern-application-development.svg",
    //       alt: "Modern Application Development"
    //     },
    //   ]
    // },
  ];

  selectedNavItem: string | null = null;

  toggleNavItemDetail(tab: string) {
    this.selectedNavItem = tab === this.selectedNavItem ? null : tab;
  }
}
