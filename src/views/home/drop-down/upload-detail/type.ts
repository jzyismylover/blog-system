// 更新用户表单（同时也是提交到数据库的基础数据）
interface UserDetail {
  nickName: string, 
  realName: string,
  sex: string,
  location: string,
  introduction: string,
  avatar?: string,
  userId?: string
}


export {
  UserDetail
}