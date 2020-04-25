const headerMenuConfig = [];
const asideMenuConfig = [
  // {
  //   name: '数据页面',
  //   path: '/',
  //   icon: 'chart-pie',
  //   children: [
  //     {
  //       name: '分析页面',
  //       path: '/dashboard/analysis',
  //     },
  //     {
  //       name: '监控页面',
  //       path: '/dashboard/monitor',
  //     },
  //     {
  //       name: '工作台',
  //       path: '/dashboard/workplace',
  //     },
  //   ],
  // },
  {
    name: 'Kubernetes',
    path: '/',
    icon: 'chart-pie',
    children: [
      {
        name: 'Nodes(节点)',
        path: '/k8s/nodes',
      },
      {
        name: 'Pods(容器)',
        path: '/k8s/pods',
      },
      {
        name: 'ReplicationController(复制控制器)',
        path: '/k8s/rc',
      },
      {
        name: 'ReplicaSet(复制设置集)',
        path: '/k8s/rs',
      },
      {
        name: 'Deployment(部署)',
        path: '/k8s/dp',
      },
      {
        name: 'StatefulSet(有状态)',
        path: '/k8s/ss',
      },
      {
        name: 'DaemonSet(后台集)',
        path: '/k8s/ds',
      },
      {
        name: 'ConfigMap(配置集)',
        path: '/k8s/cm',
      },
      {
        name: 'ConfigMap(配置集)',
        path: '/k8s/cm',
      },
      {
        name: 'ConfigMap(配置集)',
        path: '/k8s/cm',
      },
      {
        name: 'Secret(秘钥)',
        path: '/k8s/secret',
      },
      {
        name: 'HPA',
        path: '/k8s/hpa',
      },
      {
        name: 'Storage(存储)',
        path: '/k8s/storage',
      },
      {
        name: 'Service(服务)',
        path: '/k8s/service',
      },
      {
        name: 'Ingress(路由)',
        path: '/k8s/ingress',
      },
      {
        name: 'Taint(污点)',
        path: '/k8s/taint',
      },
      {
        name: 'RBAC(权限)',
        path: '/k8s/rbac',
      },
    ],
  },
  {
    name: '开发环境',
    path: '/',
    icon: 'dashboard',
    children: [
      {
        name: 'LNMP',
        path: '/k8s/lnmp'
      },
      {
        name: 'Tomcat',
        path: '/k8s/tomcat'
      }
    ]
  }
  // {
  //   name: '表单页面',
  //   path: '/',
  //   icon: 'copy',
  //   children: [
  //     {
  //       name: '单列表单',
  //       path: '/form/basic',
  //     },
  //     {
  //       name: '两列表单',
  //       path: '/form/two',
  //     },
  //     {
  //       name: '三列表单',
  //       path: '/form/three',
  //     },
  //     {
  //       name: '四列表单',
  //       path: '/form/four',
  //     },
  //     {
  //       name: '分步表单',
  //       path: '/form/step',
  //     },
  //     {
  //       name: '分类表单',
  //       path: '/form/classified',
  //     },
  //     {
  //       name: '分组表单',
  //       path: '/form/group',
  //     },
  //     {
  //       name: '流程表单',
  //       path: '/form/flow',
  //     },
  //     {
  //       name: '分级表单',
  //       path: '/form/hierarchical',
  //     },
  //   ],
  // },
  // {
  //   name: '列表页面',
  //   path: '/',
  //   icon: 'chart-bar',
  //   children: [
  //     {
  //       name: '基础列表',
  //       path: '/list/basic',
  //     },
  //     {
  //       name: '卡片列表',
  //       path: '/list/card',
  //     },
  //     {
  //       name: '表格列表',
  //       path: '/list/table',
  //     },
  //   ],
  // },
  // {
  //   name: '详情页面',
  //   path: '/',
  //   icon: 'calendar',
  //   children: [
  //     {
  //       name: '基础详情',
  //       path: '/detail/basic',
  //     },
  //     {
  //       name: '高级详情',
  //       path: '/detail/advanced',
  //     },
  //   ],
  // },
  // {
  //   name: '结果&缺省',
  //   path: '/',
  //   icon: 'warning',
  //   children: [
  //     {
  //       name: '成功页面',
  //       path: '/feedback/success',
  //     },
  //     {
  //       name: '失败页面',
  //       path: '/feedback/fail',
  //     },
  //     {
  //       name: '403',
  //       path: '/feedback/403',
  //     },
  //     {
  //       name: '404',
  //       path: '/feedback/404',
  //     },
  //     {
  //       name: '500',
  //       path: '/feedback/500',
  //     },
  //   ],
  // },
  // {
  //   name: '设置页面',
  //   path: '/',
  //   icon: 'set',
  //   children: [
  //     {
  //       name: '系统设置',
  //       path: '/settings',
  //     },
  //     {
  //       name: '个人设置',
  //       path: '/person',
  //     },
  //   ],
  // },
  // {
  //   name: '登录&注册',
  //   path: '/',
  //   icon: 'account',
  //   children: [
  //     {
  //       name: '登录',
  //       path: '/user/login',
  //     },
  //     {
  //       name: '注册',
  //       path: '/user/register',
  //     },
  //   ],
  // },
];
export { headerMenuConfig, asideMenuConfig };
