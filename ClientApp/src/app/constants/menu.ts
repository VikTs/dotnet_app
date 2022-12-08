export interface NavItem {
    name: string;
    routerLink: string;
}

export const navList: NavItem[] = [
    {
      name: 'Todos',
      routerLink: '/todos',
    },
    {
      name: 'Sport schedule',
      routerLink: '/sport',
    },
    {
      name: 'Home',
      routerLink: '/',
    }
  ];