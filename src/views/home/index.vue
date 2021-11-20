<template>
  <div id="home">
    <Header />
    <div class="main">
      <router-view />
    </div>
    <!-- <Footer title="Copy Right 20211026" /> -->
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Header from '/@/layout/header/index.vue'
import Footer from '/@/layout/footer/index.vue'

export default defineComponent({
  components: { Header, Footer },
  setup() {

  },
})
</script>

<style scoped>
#home {
  background-color: #f1f1f1;
  height: 100%;
}
.main {
  position: relative;
  padding-top: 20px;
  background: inherit;
  height: calc(100% - 100px);
}
</style>
