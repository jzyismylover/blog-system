// 首页cardItem数据信息
export interface CardItem {
  title: string,
  avatar: string,
  name: string,
  content :string, 
  goods?: number,
  views?: number,
  comment?: string  
}

export interface BlogList {
  title: string,
  avatar: string,
  name: string,
  content: string,
  type?: string,
  goods?: number,
  views?: number,
  comment?: string
}