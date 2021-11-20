import { ref, onBeforeUnmount, onMounted } from 'vue'
import WangEditor from 'wangeditor'
import axios from 'axios'
import { http } from '../utils/axios/axios';

export function useEditor() {
  const editor = ref();
  const instance = ref<WangEditor | null>();
  let content = '';

  const initContent = async () => {
    const res = await http.get('/wang-content-get.php');
    content = res.data[0]
    // 初始化内容
    instance.value!.txt.html(content)
  }

  const initEditor = () => {
    onMounted(() => {
      instance.value = new WangEditor(editor.value);
      // 初始化内容
      initContent()
      // 设置z-index
      instance.value.config.zIndex = 2
      // 设置高度
      instance.value.config.height = 450
      // 取消自动 focus
      instance.value.config.focus = false
      // 配置全屏
      instance.value.config.showFullScreen = true
      // 自定义上传图片
      instance.value.config.customUploadImg = async (resultFiles: (string | Blob)[], insertImgFn: Function) => {
        const formData = new FormData();
        console.log(resultFiles, insertImgFn);
        formData.append('file', resultFiles[0]);
        console.log(formData)
        /**开发环境下的**/ 
        const api = import.meta.env.MODE === 'development' ? '/local' : '/api'
        const res = await axios.post(`${api}/wang-image-upload.php`, formData)
        /**生产环境下的**/
        /*const prefix = import.meta.env.VITE_SERVE_URL;
        const res = await axios.post(`${prefix}/wang-image-upload.php`, formData)*/

        insertImgFn(`${import.meta.env.VITE_HOSTNAME}${res.data.url}`)
      }
      instance.value.create();
    });

    onBeforeUnmount(() => {
      instance.value!.destroy();
      instance.value = null;
    });
  }

  return {
    editor,
    initEditor,
    instance
  }
}