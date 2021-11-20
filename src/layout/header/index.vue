<template>
  <div class="header">
    <div class="left-option">
      <Logo />
      <template v-for="item in iconList" :key="item.icon.name">
        <a-tooltip placement="bottom">
          <template #title>
            <span>{{ item.tips }}</span>
          </template>
          <component v-on="item.eventObject || {}" :is="item.icon" />
        </a-tooltip>
      </template>
    </div>
    <div class="right-option">
      <!--搜索框
      ->当前关键字和博客标题的模糊匹配-->
      <!--下拉框的形式(个人信息，内容管理，新建博客)-->
      <a-dropdown>
        <!--用户img进行替换-->
        <img src="../../assets/images/xxn.png" />
        <template #overlay>
          <a-menu>
            <template v-for="item in dropList" :key="item.title">
              <a-menu-item v-on="item.event || {}">{{ item.title }}</a-menu-item>
            </template>
          </a-menu>
        </template>
      </a-dropdown>
      <Menu />
      <a-button type="primary" class="set-create" @click="handleWrite">创作</a-button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import Logo from '../logo/index.vue'
import Menu from '../menu/menu.vue'
import { Tooltip, Dropdown } from 'ant-design-vue'
import {
  SettingOutlined,
  SearchOutlined,
  GithubOutlined,
  LockOutlined
} from '@ant-design/icons-vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  components: { Logo, Menu, 'ATooltip': Tooltip, SearchOutlined, GithubOutlined, SettingOutlined, LockOutlined, 'a-dropdown': Dropdown },
  setup() {
    // 图标列表
    const iconList = [
      {
        icon: 'SearchOutlined',
        tips: '搜索'
      },
      {
        icon: 'GithubOutlined',
        tips: 'github',
        eventObject: {
          click: () => window.open('https://github.com/buqiyuan/vue3-antd')
        }
      },
      {
        icon: 'SettingOutlined',
        tips: '网站设置'
      },
      {
        icon: 'LockOutlined',
        tips: '锁屏',
        eventObject: {

        }
      },
    ];

    const dropList = reactive([
      { title: '个人中心', event: { click: () => setDetail() } },
      { title: '内容管理', event: { click: () => setContent()} },
      { title: '退出登录', event: { click: () => setLoginOut() } }
    ]);
    const router = useRouter();
    //个人中心
    const setDetail = () => { router.push(`/home/detail`) }
    //内容管理
    const setContent = () => { router.push(`/home/content`) }
    //退出登录
    const setLoginOut = () => { }


    //博客编写
    const handleWrite = () => { router.push(`/home/write`) }

    return {
      iconList,
      dropList,
      handleWrite
    }
  },
})
</script>

<style scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 10;
  background-color: #001529;
  padding: 0;
}
.right-option {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 2rem;
}
.right-option img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 0 3px rgb(196, 193, 193);
  z-index: 100;
  blackground-color: white;
}

.left-option {
  display: flex;
  align-self: center;
  color: white;
  align-items: center;
}
.left-option > * {
  margin-right: 20px;
  cursor: pointer;
}

.set-create {
  margin: 0 -1rem 0 2rem;
  border-radius: 3px;
  color: white;
  border: 0;
}
</style>
