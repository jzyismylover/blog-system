<template>
  <!--当前存在子标签-->
  <a-sub-menu v-if="menuInfo.children.length > 0" :key="menuInfo.path">
    <template>
      <template v-for="item in menuInfo.children" :key="item.path">
        <template v-if="!item.children">
          <a-menu-item :key="item.name">
            <span>{{ item.meta.title }}</span>
          </a-menu-item>
        </template>
        <!--递归调用-->
        <template v-else>
          <menu-item :menu-info="item" :key="item.name"/>
        </template>
      </template>
    </template>
  </a-sub-menu>
  <!--当前不存在子标签-->
  <a-menu-item v-else :key="menuInfo.path" :class="{'is-active':active===menuInfo.path}">
    <span>{{menuInfo.name}}</span>
  </a-menu-item>
</template>


<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    menuInfo: {
      type: Object,
      required: true,
      default() {
        return {}
      }
    },
    active: {
      type: String,
      default: ''
    }
  },
})
</script>


