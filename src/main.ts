import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import './index.css'
import InstallComponent from '/@/components/index'//全局注册自定义 component
import { setupAntd } from './plugin/antd' // 全局注册 ant-design-vue常用组件

const app = createApp(App);
setupAntd(app);
InstallComponent(app);

// 全局变量
//app.config.globalProperties.API = api

app.use(router).mount('#app');


