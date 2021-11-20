<template>
  <!--更新表单区域-->
  <div>
    <a-row class="msg-con" :gutter="30">
      <!--两列数据格式排布-->
      <a-col :span="12">
        <!--第一行-->
        <div class="info">
          <span>用户昵称</span>
          <a-input v-model:value="formItem.nickName"></a-input>
        </div>

        <!--第二行-->
        <div class="info">
          <span>用户ID</span>
          <a-input v-model:value="formItem.nickName" disabled></a-input>
        </div>

        <!--第三行-->
        <div class="info">
          <span>性别</span>
          <a-radio-group v-model:value="formItem.sex" size="large">
            <a-radio-button value="male">男</a-radio-button>
            <a-radio-button value="female">女</a-radio-button>
          </a-radio-group>
        </div>
      </a-col>

      <a-col :span="12">
        <div class="info">
          <span>真实姓名</span>
          <a-input v-model:value="formItem.realName"></a-input>

          <div class="info">
            <span>所在地区</span>
            <a-input v-model:value="formItem.location"></a-input>
          </div>

          <div class="info">
            <span>个人简介</span>
            <a-textarea v-model:value="formItem.introduction"></a-textarea>
          </div>
        </div>
      </a-col>
    </a-row>
    <a-button class="suc-btn" @click="handleSubmit">完成</a-button>
    <a-button class="can-btn" @click="handleCancle">取消</a-button>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { Textarea, message } from 'ant-design-vue'
import { UserDetail } from './type'
import { http } from '/@/utils/axios/axios'

export default defineComponent({
  components: {
    'a-textarea': Textarea
  },
  setup(props, { emit }) {
    // 取消编辑
    const handleCancle = () => {
      emit('handleCancle')
    }

    // 更新个人信息
    const handleSubmit = async () => {
      /*数据库更新操作
      update from user where xxxx*/
      if (formItem.location && formItem.realName && formItem.introduction) {
        const res = await http.post('/update-user.php', formItem);
        if (res.data.code === 200) {
          message.success('修改成功');
          emit('handleCancle');
        }
      } else {
        message.warn('数据信息未填写齐全！')
      }

    }

    const formItem: UserDetail = reactive({
      nickName: localStorage.getItem('username') || '',
      sex: 'male',
    } as any);


    return {
      handleCancle,
      handleSubmit,
      formItem
    }
  },
})
</script>

<style scoped>
.msg-con {
  margin-bottom: 50px;
}
.suc-btn {
  margin-right: 20px;
}
/*设置输入框的长度*/
.ant-input {
  width: auto;
}

.info {
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 10px 0 10px;
}

.ant-radio-group >>> .ant-radio-button-wrapper {
  width: 100px;
  margin-right: 20px;
  text-align: center;
}
</style>
