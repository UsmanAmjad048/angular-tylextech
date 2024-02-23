export interface MenuItem {
    name: string;
    url?: string;
    tab?: string | null;
    children?: MenuItem[];
    image?: string;
    alt?: string;
  }