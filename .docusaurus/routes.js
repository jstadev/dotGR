import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/__docusaurus/debug',
    component: ComponentCreator('/__docusaurus/debug', 'a9a'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/config',
    component: ComponentCreator('/__docusaurus/debug/config', 'f8f'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/content',
    component: ComponentCreator('/__docusaurus/debug/content', '499'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/globalData',
    component: ComponentCreator('/__docusaurus/debug/globalData', '8c6'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/metadata',
    component: ComponentCreator('/__docusaurus/debug/metadata', 'aad'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/registry',
    component: ComponentCreator('/__docusaurus/debug/registry', '94d'),
    exact: true
  },
  {
    path: '/__docusaurus/debug/routes',
    component: ComponentCreator('/__docusaurus/debug/routes', '659'),
    exact: true
  },
  {
    path: '/blog',
    component: ComponentCreator('/blog', '2f7'),
    exact: true
  },
  {
    path: '/blog/2023/08/13/blog',
    component: ComponentCreator('/blog/2023/08/13/blog', 'b1a'),
    exact: true
  },
  {
    path: '/blog/2023/08/18/blog',
    component: ComponentCreator('/blog/2023/08/18/blog', '2d5'),
    exact: true
  },
  {
    path: '/blog/2023/09/23/blog copy',
    component: ComponentCreator('/blog/2023/09/23/blog copy', '807'),
    exact: true
  },
  {
    path: '/blog/archive',
    component: ComponentCreator('/blog/archive', 'c43'),
    exact: true
  },
  {
    path: '/front',
    component: ComponentCreator('/front', '0b6'),
    exact: true
  },
  {
    path: '/',
    component: ComponentCreator('/', '778'),
    routes: [
      {
        path: '/developers/dev',
        component: ComponentCreator('/developers/dev', '4d8'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/devs',
        component: ComponentCreator('/devs', 'e06'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dot',
        component: ComponentCreator('/dot', '0c6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dotcoin',
        component: ComponentCreator('/dotcoin', '8b2'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/dotcoin/dotcoin',
        component: ComponentCreator('/dotcoin/dotcoin', 'd53'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/features',
        component: ComponentCreator('/features', 'd05'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/features/expand',
        component: ComponentCreator('/features/expand', 'ccb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/features/forkless',
        component: ComponentCreator('/features/forkless', '3cc'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/features/interoperability',
        component: ComponentCreator('/features/interoperability', '6f5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/features/shared',
        component: ComponentCreator('/features/shared', '382'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/index',
        component: ComponentCreator('/index', 'd01'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/security',
        component: ComponentCreator('/security', 'f77'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/security/Basic',
        component: ComponentCreator('/security/Basic', 'b14'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/security/Προσωπική Ασφάλεια',
        component: ComponentCreator('/security/Προσωπική Ασφάλεια', 'c42'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/staking',
        component: ComponentCreator('/staking', '425'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/staking/Nomination',
        component: ComponentCreator('/staking/Nomination', '41e'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/staking/philoshophy',
        component: ComponentCreator('/staking/philoshophy', '79f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wallets',
        component: ComponentCreator('/wallets', '026'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wallets/nova-wallet',
        component: ComponentCreator('/wallets/nova-wallet', 'f45'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wallets/PolkadotJS',
        component: ComponentCreator('/wallets/PolkadotJS', '423'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wallets/subwallet',
        component: ComponentCreator('/wallets/subwallet', '758'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/wallets/talisman',
        component: ComponentCreator('/wallets/talisman', '6fb'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/whatisdot/whatisdot',
        component: ComponentCreator('/whatisdot/whatisdot', '401'),
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
