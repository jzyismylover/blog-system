<template>
  <!--表单区域-->
  <a-row type="flex" justify="center">
    <a-col :span="10" :xxl="8" :xl="8" :lg="10" :md="12" :sm="16">
      <a-card title="博客管理系统" :head-style="{ 'font-size': '1.5rem', 'font-weight': 'bold' }">
        <a-form ref="formRef" :rules="rules">
          <a-form-item>
            <a-input v-model:value="formInline.username" size="large" placeholder="请输入用户名">
              <template v-slot:prefix>
                <user-outlined type="user" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-model:value="formInline.password"
              type="password"
              size="large"
              placeholder="请输入密码"
            >
              <template v-slot:prefix>
                <lock-outlined type="user" />
              </template>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-input
              v-model:value="formInline.comfirmPass"
              type="password"
              size="large"
              placeholder="请确认密码"
            >
              <template v-slot:prefix>
                <lock-outlined type="user" />
              </template>
            </a-input>
          </a-form-item>
        </a-form>
        <!--布置下方按钮区域-->
        <a-row type="flex" justify="space-around" align="middle" style="margin: 2rem 0rem 1rem 0">
          <a-col :span="24">
            <a-button size="large" type="primary" block @click="handleRegist">注册</a-button>
          </a-col>
        </a-row>
      </a-card>
    </a-col>
  </a-row>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { Card, Input } from 'ant-design-vue'
import { UserOutlined, LockOutlined } from '@ant-design/icons-vue'
import { useRouter } from 'vue-router'
import { http } from '/@/utils/axios/axios'
import { RuleObject } from 'ant-design-vue/lib/form/interface'

export default defineComponent({
  components: { 'a-card': Card, 'a-input': Input, UserOutlined, LockOutlined },
  setup() {
    const router = useRouter();

    const formRef = ref();
    const formInline = reactive({
      username: "",
      password: "",
      comfirmPass: ""
    })
    //新密码规则验证
    const passValidator = async (rule: RuleObject, value: string) => {
      if (value === '')  return Promise.reject('Please input the password'); 
      else {
        if (formInline.comfirmPass !== '') formRef.value.validateFields('checkPass');
        return Promise.resolve();
      }
    }
    const checkPass = async (rule: RuleObject, value: string) => {
      if (value === '') return Promise.reject('请输入确认密码');
      else if (value !== formInline.password) return Promise.reject('两次输入的密码不一致');
      else return Promise.resolve();
    }
    const rules = {
      username: [
        { required: true, message: '用户名不能为空' },
        { min: 5, max: 10, message: '用户名不能少于5个字段或大于10个字段' }
      ],
      password: [
        { validator: passValidator, trigger: 'change' }
      ],
      confirmPass: [
        //触发验证规则的时机非常重要
        { validator: checkPass, trigger: 'change' }
      ]
    }

    const handleRegist = async () => {
      const data = {
        username: formInline.username,
        password: formInline.password,
        type: 'user'
      }
      // 涉及到跨域问题（如何解决的方法已经写在石墨文档中）
      const res = await http.post('/regist.php', data);
      debugger;
      if (res.data.code === 200) {
        router.push('/login');
      }
    }

    return {
      formRef,
      formInline,
      rules,
      handleRegist
    }
  },
})
</script>

<style scoped>
</style>
