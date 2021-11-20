<template>
  <!--个人详情页-->
  <!--具体的逻辑实现是点击跳转的时候传递一个 vuex 或者 localStorage存储的 user_id
  通过路由 param获取到当前用户的id后台请求用户怇-->
  <div class="for-detail">
    <!--头像上传区-->
    <a-card>
      <upload-avatar />
    </a-card>
    <!--基本信息区-->
    <a-card class="for-card" title="基本信息">
      <get-detail v-if="tagName === 'get-detail'" @switch-edit="handleEdit" />
      <update-detail v-else @handleCancle="handleCancle"></update-detail>
    </a-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import getDetail from './upload-detail/get-detail.vue';
import updateDetail from './upload-detail/update-detail.vue';
import uploadAvatar from './upload-detail/upload-avatar.vue';
import GetDetail from './upload-detail/get-detail.vue';
import UpdateDetail from './upload-detail/update-detail.vue';

export default defineComponent({
  components: { getDetail, updateDetail, uploadAvatar, GetDetail, UpdateDetail },
  setup() {
    const route = useRoute();
    const user_id = ref('');
    onMounted(() => {
      user_id.value = route.params.id as string;
    })

    // 编辑保存的逻辑
    const tagName = ref('get-detail');
    const handleEdit = () => { tagName.value = 'update-detail' }

    const handleCancle = () => {
      tagName.value = 'get-detail';
    }

    return {
      handleEdit,
      handleCancle,
      tagName,
    }

  },
})
</script>

<style scoped>
.for-detail {
  box-sizing: border-box;
  width: 800px;
  height: 100%;
  margin: 0 auto;
}
</style>