<template>
    <a-row :gutter="30">
      <!--名-->
      <a-col class="flex key" :lg="6">
        <div v-for="item in keys" :key="item">{{ item }}</div>
      </a-col>
      <!--值-->
      <a-col class="flex value" :span="14" :md="14" :pull="2">
        <div v-for="item in values" :key="item">{{ item }}</div>
      </a-col>
      <a-col class="is-active editor" :span="4">
        <a-button type="primary" @click="handleClick">编辑</a-button>
      </a-col>
    </a-row>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import { http } from '/@/utils/axios/axios';
import { XRequest } from '/@/utils/axios';

export default defineComponent({
  setup(props, { emit }) {
    const keys = ['用户昵称', '真实姓名', '性别', '所在地区', '个人简介'];
    const values = ref<string[]>([]);

    onMounted(() => {getValues()})

    const getValues = async () => {
      const value = await XRequest({
        url: '/user-detail.php'
      })
      values.value = value.data;
    }

    const handleClick = () => {
      emit('switchEdit');
    }

    return {
      keys,
      values,
      handleClick
    }
  },
})
</script>

<style scoped>
.flex {
  display: flex;
  flex-direction: column;
  text-align: left;
  box-sizing: border-box;
  font-size: 1rem;
}
.flex div {
  padding:20px;
}
</style>
