
interface Item {
  title: string;
  router?: string;
  tag?: string;
  hideUnderline?: boolean;
}

interface Action {
  title?: string;
  router?: string;
}

interface List {
  title?: string;
  items: Item[];
  action?: Action;
}

export const MENU_FOOTER: List[] = [
  {
    title: 'Get in Touch',
    items: [
      {
        title: 'About Us',
        router: 'about-us',
        hideUnderline: true
      },
      {
        title: 'Careers',
        router: 'careers',
        hideUnderline: true
      },
      {
        title: 'Press Releases',
        router: 'press-releases',
        hideUnderline: true
      },
      {
        title: 'Blog',
        router: 'blog',
        hideUnderline: true
      }
    ]
  },
  {
    title: 'Connections',
    items: [
      {
        title: 'Facebook',
        router: 'facebook',
        hideUnderline: true
      },
      {
        title: 'Twitter',
        router: 'twitter',
        hideUnderline: true
      },
      {
        title: 'Instagram',
        router: 'instagram',
        hideUnderline: true
      },
      {
        title: 'Youtube',
        router: 'youtube',
        hideUnderline: true
      },
      {
        title: 'Linkedin',
        router: 'linkedin',
        hideUnderline: true
      }
    ]
  },
  {
    title: 'Earnings',
    items: [
      {
        title: 'Become an Affiliate',
        router: 'become-an-affiliate',
        hideUnderline: true
      },
      {
        title: 'Advertise your product',
        router: 'advertise-your-product',
        hideUnderline: true
      },
      {
        title: 'Sell on Market',
        router: 'sell-on-market',
        hideUnderline: true
      }
    ]
  },
  {
    title: 'Account',
    items: [
      {
        title: 'Your account',
        router: 'your-account',
        hideUnderline: true
      },
      {
        title: 'Returns Centre',
        router: 'returns-centre',
        hideUnderline: true
      },
      {
        title: '100% purchase protection',
        router: '100-purchase-protection',
        hideUnderline: true
      },
      {
        title: 'Chat with us',
        router: 'chat-with-us',
        hideUnderline: true
      },
      {
        title: 'Help',
        router: 'help',
        hideUnderline: true
      }
    ]
  }
];
