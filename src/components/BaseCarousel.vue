<template>
  <a-carousel arrows autoplay>
    <template #prevArrow>
      <!--左边箭头-->
      <div class="custom-slick-arrow" style="left: 10px; z-index: 1">
        <left-circle-outlined />
      </div>
    </template>
    <!--右边箭头→_→-->
    <template #nextArrow>
      <div class="custom-slick-arrow" style="right: 10px">
        <right-circle-outlined />
      </div>
    </template>
    <slot name="content" />
  </a-carousel>
</template>
<script lang="ts">
import { LeftCircleOutlined, RightCircleOutlined } from '@ant-design/icons-vue';
import { Carousel } from 'ant-design-vue'
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'BaseCarousel',
  components: {
    LeftCircleOutlined,
    RightCircleOutlined,
    'a-carousel': Carousel
  },
});
</script>
<style scoped>
/* For demo */
.ant-carousel :deep(.slick-slide) {/**设置区域的高度、背景颜色等**/
  text-align: center;
  max-height: 500px;
  overflow: hidden;
}

.ant-carousel :deep(.slick-arrow.custom-slick-arrow) {/**箭头的样式 */
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #fff;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel :deep(.custom-slick-arrow:before) {/**消除before影响？ */
  display: none;
}
.ant-carousel :deep(.custom-slick-arrow:hover) {/**箭头悬浮的效果 */
  opacity: 0.5;
}
</style>