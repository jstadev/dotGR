import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/docs/__docusaurus/debug',
    component: ComponentCreator('/docs/__docusaurus/debug', '3ea'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/config',
    component: ComponentCreator('/docs/__docusaurus/debug/config', '200'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/content',
    component: ComponentCreator('/docs/__docusaurus/debug/content', '77c'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/globalData',
    component: ComponentCreator('/docs/__docusaurus/debug/globalData', '54c'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/metadata',
    component: ComponentCreator('/docs/__docusaurus/debug/metadata', 'bee'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/registry',
    component: ComponentCreator('/docs/__docusaurus/debug/registry', 'd22'),
    exact: true
  },
  {
    path: '/docs/__docusaurus/debug/routes',
    component: ComponentCreator('/docs/__docusaurus/debug/routes', '895'),
    exact: true
  },
  {
    path: '/docs/blog',
    component: ComponentCreator('/docs/blog', 'e1a'),
    exact: true
  },
  {
    path: '/docs/blog/2023/08/13/blog',
    component: ComponentCreator('/docs/blog/2023/08/13/blog', 'c8b'),
    exact: true
  },
  {
    path: '/docs/blog/2023/08/18/blog',
    component: ComponentCreator('/docs/blog/2023/08/18/blog', '955'),
    exact: true
  },
  {
    path: '/docs/blog/2023/09/23/blog copy',
    component: ComponentCreator('/docs/blog/2023/09/23/blog copy', '7e7'),
    exact: true
  },
  {
    path: '/docs/blog/archive',
    component: ComponentCreator('/docs/blog/archive', 'b73'),
    exact: true
  },
  {
    path: '/docs/front',
    component: ComponentCreator('/docs/front', '5aa'),
    exact: true
  },
  {
    path: '/docs/',
    component: ComponentCreator('/docs/', 'e0e'),
    routes: [
      {
        path: '/docs/developers/dev',
        component: ComponentCreator('/docs/developers/dev', '496'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/devs',
        component: ComponentCreator('/docs/devs', 'c28'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/docs',
        component: ComponentCreator('/docs/docs', '060'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dot',
        component: ComponentCreator('/docs/dot', '9b4'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dotcoin',
        component: ComponentCreator('/docs/dotcoin', 'b75'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/dotcoin/dotcoin',
        component: ComponentCreator('/docs/dotcoin/dotcoin', '4a5'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/features',
        component: ComponentCreator('/docs/features', '9b7'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/features/expand',
        component: ComponentCreator('/docs/features/expand', '6c1'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/features/forkless',
        component: ComponentCreator('/docs/features/forkless', '883'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/features/interoperability',
        component: ComponentCreator('/docs/features/interoperability', 'c6f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/features/shared',
        component: ComponentCreator('/docs/features/shared', '98d'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/security',
        component: ComponentCreator('/docs/security', 'c70'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/security/Basic',
        component: ComponentCreator('/docs/security/Basic', '496'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/security/Προσωπική Ασφάλεια',
        component: ComponentCreator('/docs/security/Προσωπική Ασφάλεια', 'd04'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/staking',
        component: ComponentCreator('/docs/staking', 'd4f'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/staking/Nomination',
        component: ComponentCreator('/docs/staking/Nomination', 'c75'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/staking/philoshophy',
        component: ComponentCreator('/docs/staking/philoshophy', '576'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/wallets',
        component: ComponentCreator('/docs/wallets', '386'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/wallets/nova-wallet',
        component: ComponentCreator('/docs/wallets/nova-wallet', 'd88'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/wallets/PolkadotJS',
        component: ComponentCreator('/docs/wallets/PolkadotJS', 'bc6'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/wallets/subwallet',
        component: ComponentCreator('/docs/wallets/subwallet', 'f26'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/wallets/talisman',
        component: ComponentCreator('/docs/wallets/talisman', 'f80'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/docs/whatisdot/whatisdot',
        component: ComponentCreator('/docs/whatisdot/whatisdot', 'ef3'),
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
