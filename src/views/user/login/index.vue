<template>
<!--svg动画效果-->
  <div class="header">
    <div class="login_form">
      <Login-Form />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import LoginForm from './form.vue'

export default defineComponent({
  components: {
    LoginForm
  },
})
</script>

<style scoped>
.header {
  background-color: rgb(20, 146, 209);
  height: 100%;
}
.login_form {
  position: absolute;
  width: 100%;
  top: 20%;
}
</style>
