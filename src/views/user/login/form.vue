<template>
  <!--表单区域-->
  <a-row type="flex" justify="center">
    <a-col :span="10" :xxl="8" :xl="8" :lg="10" :md="12" :sm="16">
      <a-card title="博客管理系统" :head-style="{ 'font-size': '1.5rem', 'font-weight': 'bold' }">
        <a-form>
          <a-form-item>
            <a-input v-model:value="formInline.username" size="large" placeholder="admin">
              <template v-slot:prefix>
                <user-outlined type="user" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input v-model:value="formInline.password" type="password" size="large" placeholder="123">
              <template v-slot:prefix>
                <lock-outlined type="user" />
              </template>
            </a-input>
          </a-form-item>
        </a-form>
        <!--布置下方按钮区域-->
        <a-row type="flex" justify="space-around" align="middle" style="margin: 2rem 0rem 1rem 0">
          <a-col :span="8" :push="2">
            <a-button size="large" @click="$router.push('/regist')">注册/忘记密码</a-button>
          </a-col>
          <a-col :span="6" :pull="2">
            <a-button size="large" type="primary" block @click="handleLogin">登录</a-button>
          </a-col>
        </a-row>
      </a-card>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { defineComponent, getCurrentInstance, reactive } from 'vue'
import { Card, Input } from 'ant-design-vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { message } from 'ant-design-vue'
import { useRouter } from 'vue-router'
import { http } from '/@/utils/axios/axios'
import { XRequest } from '/@/utils/axios'

export default defineComponent({
  components: { 'a-card': Card, 'a-input': Input, UserOutlined, LockOutlined },
  setup() {
    // 强烈不建议使用这种方式作为访问全局变量的方式
    // const instance = getCurrentInstance()
    const router = useRouter();
    const formInline = reactive({
      username: "",
      password: "",
    })
    const handleLogin = async () => {
      const data = {
        username: formInline.username,
        password: formInline.password
      }
      // 涉及到跨域问题
      /*const res = await http.post('/login.php', data);
      if( res.data.code === 200 ) {
        localStorage.setItem('username', formInline.username);
        router.push('/home');
      } else {
        message.error('用户名或密码错误!')
      }*/
      const res = await XRequest({
        url: '/login.php',
        method: 'post',
        param: data
      })
      console.log(res)
    }

    return {
      formInline,
      handleLogin
    }
  },
})
</script>

<style scoped>
</style>
