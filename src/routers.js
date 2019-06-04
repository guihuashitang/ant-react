
const routerLists = [
  {
    path: '/home',
    name: '首页',
    title:'首页',
    component: require('./pages/home/home.js').default,
    icon:'pie-chart',
    role:['1'],
    key: '1',
    exact: true,
  },
  {
    path: '/happy',
    title:'娱乐',
    icon:'pie-chart',
    role:['2'],
    key: '2',
    children:[

      {
        path: '/happy/myGames',
        name: '游戏',
        title:'游戏',
        icon:'pie-chart',
        role:['4'],
        component: require('./pages/happy/myGames/myGames').default,
        key: '4',
      },
      {
        path: '/happy/news',
        name: '新闻',
        title:'新闻',
        icon:'pie-chart',
        role:['6'],
        component: require('./pages/happy/news/index').default,
        key: '6',
      },
      {
        path: '/happy/music',
        name: '音乐',
        title:'音乐',
        icon:'pie-chart',
        role:['3'],
        component: require('./pages/happy/music/music').default,
        key: '3',
      },
    ]
  },
  {
    path: '/movie',
    name: '影视',
    title:'影视',
    component: require('./pages/movie/index').default,
    icon:'pie-chart',
    role:['5'],
    key: '5',
  },
]


export default routerLists