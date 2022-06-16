
interface ItemMenu {
  title: string;
  router: string;
}

interface Menu {
  title: string;
  router?: string;
  subItem?: ItemMenu[];
}

export const MAIN_MENU: Menu[] = [
  {
    title: 'Bakery ',
    subItem: [
      {
        title: 'example',
        router: '/bakery/example'
      }
    ]
  },
  {
    title: 'Fruit and vegetables',
    subItem: [
      {
        title: 'Example',
        router: '/#/'
      }
    ]
  },
  {
    title: 'Meat and fish',
    subItem: [
      {
        title: 'Example',
        router: '/#/'
      }
    ]
  },
  {
    title: 'Drinks',
    subItem: [
      {
        title: 'Example',
        router: '/#/'
      }
    ]
  },
  {
    title: 'Kitchen',
    subItem: [
      {
        title: 'Example',
        router: '/#/'
      }
    ]
  },
  {
    title: 'Special nutricion',
    subItem: [
      {
        title: 'Example',
        router: '/#/'
      }
    ]
  },
  {
    title: 'Baby',
    subItem: [
      {
        title: 'Example',
        router: '/#/'
      }
    ]
  },
  {
    title: 'Pharmacy',
    subItem: [
      {
        title: 'Example',
        router: '/#/'
      }
    ]
  }
];
