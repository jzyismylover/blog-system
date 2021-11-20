<template>
  <!--需要渲染的数据
  title avatar name content goods views comment-->
  <div class="blog-list">
    <h2>{{ list.title }}</h2>
    <div class="container">
      <img class="avatar" :src="list.avatar" alt="image" />
      <span class="name">{{ list.username }}</span>
      <div class="content">{{ list.content }}</div>
      <div>
        <!-- <img src="" alt=""> {{ goods }}| -->
        <!-- <img src="" alt=""> {{ views }}| -->
        <!-- <img src="" alt=""> {{ comment }} -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: "BaseBlogItem",
  props: {
    list: {
      type: Object,
      default() {
        return {}
      }
    }
  },
  setup() {

  },
})
</script>

<style scoped>
.blog-list h2 {
  text-align: left;
  font-weight: bolder;
  padding: 5px 10px;
}
.container {
  display: flex;
  flex-direction: row;
  align-items: center;
}
.container .avatar {
  margin: 5px 10px;
}
.container .content {
  margin: 5px 10px;
}

img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
</style>
