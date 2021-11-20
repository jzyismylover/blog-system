
export function stringify(params: any) {
  // 一般请求头为 multipart/form-data
  let formData = new FormData();
  for(let i in params) {
      formData.append(i, params[i])
  }
  return formData;
}