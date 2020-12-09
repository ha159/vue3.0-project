<template>
  <div class="container">
    <global-header :user='userData'></global-header>
    <router-view></router-view>
    <footer class="text-center py-4 text-secondary bg-light mt-6">
      <small>
        <ul class="list-inline mb-0">
          <li class="list-inline-item">© 2020 者也专栏</li>
          <li class="list-inline-item">课程</li>
          <li class="list-inline-item">文档</li>
          <li class="list-inline-item">联系</li>
          <li class="list-inline-item">更多</li>
        </ul>
      </small>
    </footer>
    <!-- <column-list :list='list'></column-list> -->
    <validate-form @form-submit="onFormSubmit">
      <div class="mb-3">
        <label class="form-label">邮箱地址</label>
        <validate-input 
          class="hello" 
          type="text" 
          placeholder="请输入邮箱地址" 
          :rules="emailRules" 
          v-model="emailVal"
          ref="inputRef"
        />
      </div>
      <div class="mb-3">
        <label class="form-label">密码</label>
        <validate-input 
          class="hello" 
          type="password" 
          placeholder="请输入密码" 
          :rules="passwordRules" 
          v-model="passwordVal"
        />
      </div>
      <template #submit>
        <span class="btn btn-danger">Submit</span>
      </template>
    </validate-form>
  </div>
</template>
<script lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css'
import { defineComponent, reactive, ref } from 'vue'
import ColumnList, { ColumnProps } from './components/ColumnList.vue'
import ValidateForm from '@/components/ValidateForm.vue'
import ValidateInput, { RulesProp } from './components/ValidateInput.vue'
import GlobalHeader from '@/components/GlobalHeader.vue'
import HelloWorld from '@/components/HelloWorld.vue'
const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是的test1专栏，有一段非常有意思的简介，可以更新一下欧',
    avatar: 'http://vue-maker.oss-cn-hangzhou.aliyuncs.com/vue-marker/5ee22dd58b3c4520912b9470.jpg?x-oss-process=image/resize,m_pad,h_100,w_100'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是的test2专栏，有一段非常有意思的简介，可以更新一下欧'
  }
]
const currentUser = {
  isLogin: true,
  name: 'xiaoming'
}
export default defineComponent({
  name: 'App',
  components: {
    ColumnList,
    GlobalHeader,
    ValidateInput,
    HelloWorld,
    ValidateForm
  },
  data () {
    return {
      msg: '123'
    }
  },
  setup () {
    const inputRef = ref<any>()
    const emailVal = ref('123@qq.com')
    const emailRules: RulesProp = [
      { type: 'required', message: '电子邮箱地址不能为空' },
      { type: 'email', message: '请输入正确的电子邮箱格式'}
    ]
    const passwordVal = ref(123)
    const passwordRules: RulesProp = [
      { type: 'required', message: '密码不能为空' }
    ]
    const onFormSubmit = (result: boolean) => {
      console.log(inputRef.value.validateInput())
      console.log('1234', result)
    }
    return {
      list: testData,
      userData: currentUser,
      emailRules,
      emailVal,
      passwordVal,
      passwordRules,
      onFormSubmit,
      inputRef
    }
  }
})
</script>

<style>

</style>
