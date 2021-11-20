<template>
  <!--博客查看页面-->
  <!--具体的逻辑实现是点击跳转的时候传递一个 blog_id
  页面通过路由 param拿到 blog_id请求后台返回博客数据-->
  <a-card class="for-self-blog" title="hello">单个博客信息</a-card>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useRoute, onBeforeRouteUpdate } from 'vue-router';

export default defineComponent({
  setup() {
    const route = useRoute();
    /*
    根据传递过来的信息请求数据库 - 
    select title, content
    from blog where route.param.id=blog.blog_id*/
    onMounted(() => {
      console.log(route.params);
    })
  },
})
</script>

<style scoped>
.for-self-blog {
  width: 1000px;
  margin: 0 auto;
}
</style>
