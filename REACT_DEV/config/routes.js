export default [
  {
    path: '/',
    component: '../layouts/BlankLayout',
    routes: [
      {
        path: '/',
        component: '../layouts/SecurityLayout',
        routes: [
          {
            path: '/',
            component: '../layouts/BasicLayout',
            authority: ['admin', 'user'],
            routes: [
              {
                path: '/',
                redirect: '/home',
                headerRender:false
              },
              {
                path: '/home',
                name: 'home',
                icon: 'home',
                component: './Home',
                headerRender:false,
                menuRender: false,
              },
              {
                path: '/welcome',
                name: 'welcome',
                icon: 'search',
                // headerRender:false,
                component: './Welcome',
              },
              // {
              //   path: '/use',
              //   name: 'use',
              //   component: './Welcome/use.jsx',
              //   hideInMenu: true,
              //   headerRender:false,
              // },
              // {
              //   path: '/figVedioGraden',
              //   name: 'figVedioGraden',
              //   icon: 'videoCamera',
              //   component: './FigVedioGraden',
              //   // headerRender:false,
              // },
              {
                path: '/knowledgeSearch',
                name: 'knowledgeSearch',
                icon: 'search',
                component: './KnowledgeSearch',
                // headerRender:false,
              },
              // {
              //   path: '/relationSearch',
              //   name: 'relationSearch',
              //   icon: 'node-index',
              //   component: './RelationSearch',
              // },
              {
                path: '/timeSpaceExplore',
                name:'timeSpaceExplore',
                icon: 'node-index',
                component: './TimeSpaceExplore',
              },
              {
                path: '/timespacesEarch',
                name: 'timespacesEarch',
                icon: 'hourglass',
                component: './TimespacesEarch',
                // headerRender:false,
              },
              {
                path: '/back',
                name: 'back',
                icon: 'interaction',
                component: './Back/peopleBack',
                // headerRender:false,
                // routes: [
                //   {
                //     path: '/back/eventBack',
                //     name: 'eventBack',
                //     icon: 'interaction',
                //     component: './Back/eventBack',
                //     headerRender:false,
                //   },
                //   {
                //     path: '/back/peopleBack',
                //     name: 'peopleBack',
                //     icon: 'peopleBack',
                //     component: './Back/peopleBack',
                //     headerRender:false,
                //   },
                // ],
              },
              // {
              //   path: '/textBack',
              //   name: 'textBack',
              //   icon: 'file-search',
              //   component: './TextBack',
              //   // headerRender:false,
              // },
              // {
              //   path: '/informationExtraction',
              //   name: 'informationExtraction',
              //   icon: 'ungroup',
              //   // headerRender:false,
              //   routes: [
              //     {
              //       path: '/informationExtraction/baikeExtraction',
              //       name: 'informationExtraction',
              //       icon: 'ungroup',
              //       component: './InformationExtraction',
              //       // headerRender:false,
              //     },
              //     {
              //       path: '/informationExtraction/kgTramsformer',
              //       name: 'kgTramsformer',
              //       icon: 'ungroup',
              //       component: './KGTramsformer',
              //       // headerRender:false,
              //     },
              //   ],
              // },
              {
                path: '/kbqa',
                name: 'kbqa',
                icon: 'comment',
                component: './KBQA',
                // headerRender:false,
              },
              {
                path: '/openApi',
                name: 'openApi',
                icon: 'cloudSync',
                component: './OpenApi',
                // headerRender:false,
              },
              // {
              //   path: '/about',
              //   name: 'about',
              //   icon: 'instagram',
              //   component: './About',
              //   // headerRender:false,
              // },
              {
                component: './404',
              },
            ],
          },
          {
            component: './404',
          },
        ],
      },
    ],
  },
  {
    component: './404',
  },
];
