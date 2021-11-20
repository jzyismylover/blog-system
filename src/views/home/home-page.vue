<template>
  <a-row :gutter="20">
    <a-col :span="8">
      <a-card class="self flex flex-col mb-4">
        <BaseNav title="个人信息" />
        <img class="mx-auto" src="../../assets/images/xxn.png" />
        <div class="flex flex-col">
          <span>jzyismylover</span>
          <span>管理员</span>
        </div>
      </a-card>
      <a-card>
        <BaseNav title="系统介绍" />
        <span>平台是一个博客（论坛）发布系统</span>
        <span>具体的功能包括用户可以上传自己的个人信息、发布自己的博客、查看其它用户博客</span>
      </a-card>
    </a-col>
    <!--左边博客列表区域-->
    <a-col class="carousel" :span="16">
      <BaseCarousel>
        <template v-slot:content>
          <!--当前图片对于轮播图的宽高是不适应的 -> 如何等比例进行缩放-->
          <!--后续时间允许的话做一个热点新闻展示-->
          <img src="../../assets/images/xxn.png" alt="">
          <img src="../../assets/images/xxn.png" alt="">
          <img src="../../assets/images/xxn.png" alt="">
        </template>
      </BaseCarousel>
    </a-col>
  </a-row>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import { Row, Col, Card } from 'ant-design-vue'
import BaseNav from '/@/components/BaseNav.vue'
import BaseCarousel from '/@/components/BaseCarousel.vue'

export default defineComponent({
  components: {
    'ARow': Row,
    'ACol': Col,
    'ACard': Card,
    BaseNav,
    BaseCarousel
  },
})
</script>

<style scoped>
/*类似下面这种 css 完成可以通过 tailwindcss 去解决 */
/*但考虑到目前还不太熟悉 -- 暂时先这样子写 */
/*
书写顺序的问题：https://www.shejidaren.com/css-written-specifications.html
1.位置属性(position, top, right, z-index, display, float等)
2.大小(width, height, padding, margin)
3.文字系列(font, line-height, letter-spacing, color- text-align等)
4.背景(background, border等)
5.其他(animation, transition等) */
.ant-card {
  background-color: rgb(255, 253, 253);
  width: 100% !important;
}
.ant-row {
  margin: 0 !important;
}
.category p {
  cursor: pointer;
}

.blog-list {
  margin-bottom: 10px;
}

.list {
  padding-bottom: 5px;
  border-bottom: 1px rgb(208, 206, 206) solid;
}
.self img {
  width: 150px;
  height: 150px;
  border-radius: 50%;
}

/*轮播图样式设置*/
.carousel >>> img{
  /* height: 500px; */
}
</style>

<style scoped>
/*text-indent: 1.5rem; 缩进属性*/
</style>
