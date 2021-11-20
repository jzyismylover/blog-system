//存储头部导航条信息
interface MenuItem {
  path: string,
  name: string,
  children: MenuItem[]
}

export const MenuList: MenuItem[] = [
  { path: '/home', name: '首页', children: [] },
  { path: '/home/blog', name: '博客详情', children: [] },
]