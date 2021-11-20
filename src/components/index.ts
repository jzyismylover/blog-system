// 提供对外全局注册组件的接口
import type { App } from 'vue';
const importIn = import.meta.glob('./*.vue')

export default (app?:App<Element>) => {
  for(const path in importIn) {
    importIn[path]().then((mod) => {
      console.log(mod, path)
      app?.component(mod.default.name, mod.default);
    })
  }
}
