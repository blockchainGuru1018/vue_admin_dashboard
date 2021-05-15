export default [
  {
    _name: 'CSidebarNav',
    _children: [
      {
        _name: 'CSidebarNavItem',
        name: '场站可视化',
        to: '/base/tables',
        icon: 'cil-speedometer',
        // badge: {
        //   color: 'primary',
        //   text: 'NEW'
        // }
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['场站管理']
      },
      {
        _name: 'CSidebarNavItem',
        name: '场站管理',
        to: '/base/tables_1',
        icon: 'cil-bell'
      },
      {
        _name: 'CSidebarNavItem',
        name: '运维人员管理',
        to: '/charts',
        icon: 'cil-pencil'
      },
      {
        _name: 'CSidebarNavItem',
        name: '设备管理',
        to: '/notifications/alerts',
        icon: 'cil-calculator'
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['报警管理']
      },
      {
        _name: 'CSidebarNavDropdown',
        name: '实时报警',
        route: '/base',
        icon: 'cil-puzzle',
        // items: [
        //   {
        //     name: 'Breadcrumbs',
        //     to: '/base/breadcrumbs'
        //   },
        //   {
        //     name: 'Cards',
        //     to: '/base/cards'
        //   },
        //   {
        //     name: 'Carousels',
        //     to: '/base/carousels'
        //   },
        //   {
        //     name: 'Collapses',
        //     to: '/base/collapses'
        //   },
        //   {
        //     name: 'Forms',
        //     to: '/base/forms'
        //   },
        //   {
        //     name: 'Jumbotrons',
        //     to: '/base/jumbotrons'
        //   },
        //   {
        //     name: 'List Groups',
        //     to: '/base/list-groups'
        //   },
        //   {
        //     name: 'Navs',
        //     to: '/base/navs'
        //   },
        //   {
        //     name: 'Navbars',
        //     to: '/base/navbars'
        //   },
        //   {
        //     name: 'Paginations',
        //     to: '/base/paginations'
        //   },
        //   {
        //     name: 'Popovers',
        //     to: '/base/popovers'
        //   },
        //   {
        //     name: 'Progress Bars',
        //     to: '/base/progress-bars'
        //   },
        //   {
        //     name: 'Switches',
        //     to: '/base/switches'
        //   },
        //   {
        //     name: 'Tables',
        //     to: '/base/tables'
        //   },
        //   {
        //     name: 'Tabs',
        //     to: '/base/tabs'
        //   },
        //   {
        //     name: 'Tooltips',
        //     to: '/base/tooltips'
        //   }
        // ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: '历史报警',
        route: '/1',
        icon: 'cil-cursor',
        // items: [
        //   {
        //     name: 'Buttons',
        //     to: '/buttons/standard-buttons'
        //   },
        //   {
        //     name: 'Button Dropdowns',
        //     to: '/buttons/dropdowns'
        //   },
        //   {
        //     name: 'Button Groups',
        //     to: '/buttons/button-groups'
        //   },
        //   {
        //     name: 'Brand Buttons',
        //     to: '/buttons/brand-buttons'
        //   }
        // ]
      },
      {
        _name: 'CSidebarNavTitle',
        _children: ['系统设置']
      },
      {
        _name: 'CSidebarNavItem',
        name: '角色管理',
        to: '/charts',
        icon: 'cil-chart-pie'
      },
      {
        _name: 'CSidebarNavDropdown',
        name: '用户管理',
        route: '/icons',
        icon: 'cil-star',
        // items: [
        //   {
        //     name: 'CoreUI Icons',
        //     to: '/icons/coreui-icons',
        //     badge: {
        //       color: 'info',
        //       text: 'NEW'
        //     }
        //   },
        //   {
        //     name: 'Brands',
        //     to: '/icons/brands'
        //   },
        //   {
        //     name: 'Flags',
        //     to: '/icons/flags'
        //   }
        // ]
      },
      {
        _name: 'CSidebarNavDropdown',
        name: '数据字典',
        route: '/notifications',
        icon: 'cil-bell',
        // items: [
        //   {
        //     name: 'Alerts',
        //     to: '/notifications/alerts'
        //   },
        //   {
        //     name: 'Badges',
        //     to: '/notifications/badges'
        //   },
        //   {
        //     name: 'Modals',
        //     to: '/notifications/modals'
        //   }
        // ]
      },
      {
        _name: 'CSidebarNavItem',
        name: '操作日志',
        to: '/notifications/modals',
        icon: 'cil-chart-pie'
      },
      // {
      //   _name: 'CSidebarNavItem',
      //   name: 'Widgets',
      //   to: '/widgets',
      //   icon: 'cil-calculator',
      //   badge: {
      //     color: 'primary',
      //     text: 'NEW',
      //     shape: 'pill'
      //   }
      // },
      {
        _name: 'CSidebarNavDivider',
        _class: 'm-2'
      },
      // {
      //   _name: 'CSidebarNavTitle',
      //   _children: ['Extras']
      // },
      // {
      //   _name: 'CSidebarNavDropdown',
      //   name: 'Pages',
      //   route: '/pages',
      //   icon: 'cil-star',
      //   items: [
      //     {
      //       name: 'Login',
      //       to: '/pages/login'
      //     },
      //     {
      //       name: 'Register',
      //       to: '/pages/register'
      //     },
      //     {
      //       name: 'Error 404',
      //       to: '/pages/404'
      //     },
      //     {
      //       name: 'Error 500',
      //       to: '/pages/500'
      //     }
      //   ]
      // },
      // {
      //   _name: 'CSidebarNavItem',
      //   name: 'Download CoreUI',
      //   href: 'http://coreui.io/vue/',
      //   icon: { name: 'cil-cloud-download', class: 'text-white' },
      //   _class: 'bg-success text-white',
      //   target: '_blank'
      // },
      // {
      //   _name: 'CSidebarNavItem',
      //   name: 'Try CoreUI PRO',
      //   href: 'http://coreui.io/pro/vue/',
      //   icon: { name: 'cil-layers', class: 'text-white' },
      //   _class: 'bg-danger text-white',
      //   target: '_blank'
      // }
    ]
  }
]