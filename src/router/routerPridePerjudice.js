export const pridePerjudice=[


    // ******************** part 1 *************************
    {
        path: '/pride_p1c1/part1/capter_01',
        name: 'Pride_P1C1',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/pridePerjudice/part1/chapter_01.vue')
    },
    {
        path: '/pride_p1c2/part1/capter_02',
        name: 'Pride_P1C2',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/pridePerjudice/part1/chapter_02.vue')
    }
    ,
    {
        path: '/pride_p1c3/part1/capter_03',
        name: 'Pride_P1C3',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/pridePerjudice/part1/chapter_03.vue')
    }
];
