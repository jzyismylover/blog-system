<template>
  <div id="footer">
    {{ title }}
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Row, Col } from 'ant-design-vue'

export default defineComponent({
  components: {
    Row,
    Col
  },
  props: {
    title: {
      type:String,
      default: ''
    }
  },
})
</script>

<style scoped>
#footer {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background: #f1f1f1;
  text-align: center;
}
</style>
