import { ref } from 'vue'
import { http } from '/@/utils/axios/axios';

// 获取前十热榜人物
export function useUsers() {
  const hotUsers = ref<string[]>([]);

  async function getHostUsers() {
    const res = await http.get('/users.php');
    hotUsers.value = res.data;
  }

  return {
    getHostUsers,
    hotUsers
  }
}