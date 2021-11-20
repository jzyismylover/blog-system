<template>
<!--svg动画效果-->
  <div class="header">
    <div class="regist_form">
      <Regist-Form />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RegistForm from './form.vue'

export default defineComponent({
  components: {
    RegistForm
  },
  setup() {
    
  },
})
</script>

<style scoped>
.header {
  background-color: rgb(20, 146, 209);
  height: 100%;
}
.regist_form {
  position: absolute;
  width: 100%;
  top: 20%;
}
</style>
