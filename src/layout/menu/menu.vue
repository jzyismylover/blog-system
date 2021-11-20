<template>
  <a-menu theme="dark" mode="horizontal" @click="clickMenuItem">
    <template v-for="item in MenuList" :key="item.name">
      <menu-item :menu-info="item" :active="activeTag" />
    </template>
  </a-menu>
</template>

<script lang="ts">
import { defineComponent, provide, ref } from 'vue'
import { useRouter } from 'vue-router'
import MenuItem from './menu-item.vue'
import { MenuList } from '/@/constant/menu'

export default defineComponent({
  components: {
    MenuItem
  },
  provide: {

  },
  setup() {
    const router = useRouter();

    const activeTag = ref(MenuList[0].path);
    provide('activeTag', {
      activeTag
    });
    const clickMenuItem = (item: any) => {
      activeTag.value = item.key;
      router.push(item.key)
    }

    return {
      clickMenuItem,
      MenuList,
      activeTag
    }
  },
})
</script>

<style scoped>
.ant-menu {
  height: 70px;
  padding: 10px;
}
.ant-menu >>> .ant-menu-item {
  width: 100px;
  margin: 0 0.2rem;
  text-align: center;
}
.ant-menu >>> .is-active {
  background-color: transparent;
}
.ant-menu >>> .ant-menu-item:hover {
  background:transparent;
}

</style>
