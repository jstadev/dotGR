import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/dot/__docusaurus/debug',
    component: ComponentCreator('/dot/__docusaurus/debug', 'cfd'),
    exact: true
  },
  {
    path: '/dot/__docusaurus/debug/config',
    component: ComponentCreator('/dot/__docusaurus/debug/config', '4b0'),
    exact: true
  },
  {
    path: '/dot/__docusaurus/debug/content',
    component: ComponentCreator('/dot/__docusaurus/debug/content', '482'),
    exact: true
  },
  {
    path: '/dot/__docusaurus/debug/globalData',
    component: ComponentCreator('/dot/__docusaurus/debug/globalData', '491'),
    exact: true
  },
  {
    path: '/dot/__docusaurus/debug/metadata',
    component: ComponentCreator('/dot/__docusaurus/debug/metadata', '81e'),
    exact: true
  },
  {
    path: '/dot/__docusaurus/debug/registry',
    component: ComponentCreator('/dot/__docusaurus/debug/registry', '15f'),
    exact: true
  },
  {
    path: '/dot/__docusaurus/debug/routes',
    component: ComponentCreator('/dot/__docusaurus/debug/routes', 'a62'),
    exact: true
  },
  {
    path: '/dot/blog',
    component: ComponentCreator('/dot/blog', '940'),
    exact: true
  },
  {
    path: '/dot/blog/2023/08/13/blog',
    component: ComponentCreator('/dot/blog/2023/08/13/blog', 'b5f'),
    exact: true
  },
  {
    path: '/dot/blog/2023/08/18/blog',
    component: ComponentCreator('/dot/blog/2023/08/18/blog', '117'),
    exact: true
  },
  {
    path: '/dot/blog/2023/09/23/blog copy',
    component: ComponentCreator('/dot/blog/2023/09/23/blog copy', '382'),
    exact: true
  },
  {
    path: '/dot/blog/archive',
    component: ComponentCreator('/dot/blog/archive', '030'),
    exact: true
  },
  {
    path: '/dot/front',
    component: ComponentCreator('/dot/front', '423'),
    exact: true
  },
  {
    path: '/dot/',
    component: ComponentCreator('/dot/', '587'),
    routes: [
      {
        path: '/dot/',
        component: ComponentCreator('/dot/', 'baf'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dot/developers/dev',
        component: ComponentCreator('/dot/developers/dev', 'f7c'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dot/devs',
        component: ComponentCreator('/dot/devs', '090'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dot/dot',
        component: ComponentCreator('/dot/dot', '6a6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dot/dotcoin',
        component: ComponentCreator('/dot/dotcoin', 'ae4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dot/dotcoin/dotcoin',
        component: ComponentCreator('/dot/dotcoin/dotcoin', '933'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dot/features',
        component: ComponentCreator('/dot/features', '59d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dot/features/expand',
        component: ComponentCreator('/dot/features/expand', '55b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dot/features/forkless',
        component: ComponentCreator('/dot/features/forkless', 'e7e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dot/features/interoperability',
        component: ComponentCreator('/dot/features/interoperability', '3cc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dot/features/shared',
        component: ComponentCreator('/dot/features/shared', 'c29'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dot/security',
        component: ComponentCreator('/dot/security', 'efd'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dot/security/Basic',
        component: ComponentCreator('/dot/security/Basic', 'd43'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dot/security/Προσωπική Ασφάλεια',
        component: ComponentCreator('/dot/security/Προσωπική Ασφάλεια', '7e4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dot/staking',
        component: ComponentCreator('/dot/staking', '30f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dot/staking/Nomination',
        component: ComponentCreator('/dot/staking/Nomination', '3c8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dot/staking/philoshophy',
        component: ComponentCreator('/dot/staking/philoshophy', '886'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dot/wallets',
        component: ComponentCreator('/dot/wallets', '717'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dot/wallets/nova-wallet',
        component: ComponentCreator('/dot/wallets/nova-wallet', 'f55'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dot/wallets/PolkadotJS',
        component: ComponentCreator('/dot/wallets/PolkadotJS', '96b'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dot/wallets/subwallet',
        component: ComponentCreator('/dot/wallets/subwallet', '319'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dot/wallets/talisman',
        component: ComponentCreator('/dot/wallets/talisman', '44d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dot/whatisdot/whatisdot',
        component: ComponentCreator('/dot/whatisdot/whatisdot', 'ecd'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
