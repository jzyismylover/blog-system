import { ref, unref } from 'vue'
import { http } from '/@/utils/axios/axios'
import { BlogList } from '/@/views/home/types';

// 获取所有的博客列表
export function useBlogs() {
  const active_blogs = ref<BlogList[]>([]);
  let blogs: BlogList[] = []; // 博客列表
  const types = ref<Set<string>>(new Set()); // 博客列表

  // 返回所有的新闻列表
  async function getBlogs() {
    const res = await http.get('/blog.php');
    blogs = active_blogs.value = res.data;
  }

  // 返回博客所有的类型
  async function getTypes() {
    const res = unref(blogs)!;
    for (let i=0, item; item = res[i++]; ) {
      types.value?.add(item.type!);
    }
  }

  // 根据某个类别更新当前的新闻列表
  function getTypeBlog(type: string) {
    if(type === '全部') { return blogs; }
    return blogs.filter((item) => {
      return item.type === type;
    })
  }

  return {
    getBlogs,
    getTypes,
    getTypeBlog,
    active_blogs,
    types
  }
}