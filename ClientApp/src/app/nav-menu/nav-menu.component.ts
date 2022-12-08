import { Component } from '@angular/core';
import { NavItem, navList } from '../constants/menu';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent {
  isExpanded = false;
  navList: NavItem[] = navList;
}
