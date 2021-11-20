<template>
  <a-upload
    v-model:file-list="fileList"
    name="avatar"
    list-type="picture-card"
    class="avatar-uploader"
    action="#"
    :before-upload="beforeUpload"
    :customRequest="handleUpload"
  >
    <!--动态设置upload-->
    <img v-if="imageUrl" :src="imageUrl" alt="avatar" />
    <div v-else>
      <loading-outlined v-if="loading"></loading-outlined>
      <plus-outlined v-else></plus-outlined>
      <div class="ant-upload-text">Upload</div>
    </div>
  </a-upload>
</template>
<script lang="ts">
import { PlusOutlined, LoadingOutlined } from '@ant-design/icons-vue';
import { Upload } from 'ant-design-vue'
import { message } from 'ant-design-vue';
import { defineComponent, onMounted, ref } from 'vue';
import axios from 'axios'
import { http } from '/@/utils/axios/axios'
import { XRequest } from '/@/utils/axios/index'

interface FileItem {
  uid: string;
  name?: string;
  status?: string;
  response?: string;
  percent?: number;
  url?: string;
  preview?: string;
  originFileObj?: any;
  size?: number,
  type?: string
}

export default defineComponent({
  components: {
    LoadingOutlined,
    PlusOutlined,
    'a-upload': Upload
  },
  setup() {
    const fileList = ref<FileItem[]>([]) as any;
    const loading = ref<boolean>(false);
    const imageUrl = ref<string>('');

    // 初始获取图片列表
    onMounted(() => {
      getValues()
    })

    const getValues = async () => {
      const res = await XRequest({
        url: '/get-image.php',
      })
      fileList.value.push({
        uid: '-1',
        name: 'image.png',
        status: 'done',
        url: res.data[0],
      })
      console.log(fileList)
    }

    const handleUpload = async (data: any) => {
      const { file } = data;
      const formData = new FormData
      formData.append('file', file)
      /*开发环境下的*/
      // const api = import.meta.env.MODE === 'development' ? '/local' : '/api'
      // const res = await axios.post(`${api}/upload-image.php`, formData)
      // /**生产环境下的 */
      // /*const api = import.meta.env.VITE_SERVE_URL
      // const res = await axios.post(`${api}/upload-image.php`, formData)*/

      const res = await XRequest({
        url: '/upload-image.php',
        method: 'post',
        param: formData,
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })

      fileList.value = []
      fileList.value.push({
        uid: file.uid,
        name: file.name,
        url: `${import.meta.env.VITE_HOSTNAME}${res.data.url}`,
        status: 'done'
      } as any)
    }

    //图片上传前对图片格式和图片大小的验证
    const beforeUpload = (file: FileItem) => {
      const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
      if (!isJpgOrPng) {
        message.error('You can only upload JPG file!');
      }
      const isLt2M = file.size! / 1024 / 1024 < 2;
      if (!isLt2M) {
        message.error('Image must smaller than 2MB!');
      }
      return isJpgOrPng && isLt2M;
    };

    return {
      fileList,
      loading,
      imageUrl,
      beforeUpload,
      handleUpload
    };
  },
});
</script>
<style>
.avatar-uploader > .ant-upload {
  width: 128px;
  height: 128px;
}
.ant-upload-select-picture-card i {
  font-size: 32px;
  color: #999;
}

.ant-upload-select-picture-card .ant-upload-text {
  margin-top: 8px;
  color: #666;
}
</style>