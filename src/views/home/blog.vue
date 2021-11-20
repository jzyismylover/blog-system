<template>
  <!--博客主界面-->
  <a-row :gutter="20">
    <a-col :span="6">
      <a-card class="category" @click="handleCategoryClick($event)">
        <BaseNav title="分类" />
          <p>全部</p>
          <p v-for="item in types" :key="item">{{ item }}</p>
      </a-card>
    </a-col>

    <a-col :span="12">
      <a-card class="blogs">
        <BaseNav title="博客列表" />
        <!--首分类的话默认抽取前十条-->
        <!--后续根据分类的条件筛选出符合条件的前十条-->
        <BaseBlogItem
          class="list mb-4 border-b-2"
          v-for="(item,index) in active_blogs"
          :key="index"
          :list="item"
        />
      </a-card>
    </a-col>

    <a-col :span="6">
      <a-card class="roles">
        <BaseNav title="热榜人物" />
        <p v-for="item in hotUsers" :key="item">{{ item }}</p>
      </a-card>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useBlogs, useUsers } from '/@/controller/blog/index'

export default defineComponent({
  setup() {
    const { getBlogs, getTypes, getTypeBlog, active_blogs, types } = useBlogs();
    const { getHostUsers, hotUsers } = useUsers();

    const handleCategoryClick = (e: any) => {
      active_blogs.value = getTypeBlog(e.target.innerHTML)
    }

    const handleHotUsers = (e: HTMLElement) => {
      
    }

    // 数据初始化
    onMounted(async () => {
      await getBlogs();
      await getHostUsers();
      getTypes();
    })

    return {
      handleCategoryClick,
      active_blogs,
      types,
      hotUsers
    }
  },
})
</script>

<style scoped>
.ant-row {
  box-sizing: border-box;
  width: 100%;
  padding-left: 10px;
}

p {
  display: block;
  padding: 20px;
  font-size: 15px;
}
p:hover {
  cursor: pointer;
}
</style>
