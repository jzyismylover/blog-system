<template>
  <!--富文本编辑器编辑 wangEditor-->
  <!--需要注意的是图片接口和视频接口的问题-->
  <div>
    <div class="editor" ref="editor"></div>
    <a-button class="btn" type="primary" @click="handleWangUpload">完成编辑</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import { useEditor } from '/@/controller/wangEditor'
import { http } from '/@/utils/axios/axios'

export default defineComponent({
  setup() {
    const { editor, instance, initEditor } = useEditor()
    initEditor()

    const handleWangUpload = async () => {
      const html = instance.value?.txt.html()
      const data = {
        content: html
      }
      const res = await http.post('/wang-content-update.php', data)
      console.log(res)
    }
    return {
      editor,
      handleWangUpload
    }
  },
})
</script>

<style scoped>
.editor {
  text-align: left;
}
.btn {
  margin-top: 20px;
}
</style>