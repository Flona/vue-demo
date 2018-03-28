<template>
  <div>
    <p>{{reverseMsg}}</p>
    <input name="test" v-model="modelMsg">
    <p>{{name}}</p>
    <input type="text" name="search" v-model="question">
    <p>{{answer}}</p>
  </div>
</template>

<script>
import http from '../service/http'
import {debounce} from 'lodash'

export default{
  data () {
    return {
      msg: 'xiaohei',
      name: 'xiaobai',
      question: '',
      answer: '请输入问题...'
    }
  },
  computed: {
    reverseMsg: function () {
      return this.msg.split('').reverse().join('')
    },
    modelMsg: {
      get: function () {
        return this.name
      },
      set: function (newValue) {
        // 方便vuex使用
        this.name = newValue
      }
    }
  },
  watch: {
    question: function (newQuestion, oldQuestion) {
      this.answer = '等待输入结束...'
      this.getAnwser()
    }
  },
  methods: {
    getAnwser: debounce(
      function () {
        if (this.question.indexOf('?') === -1) {
          this.answer = '请输入问号以表询问语句结束...'
          return
        }
        this.answer = '正在查询...'
        http.getList().then(res => {
          this.answer = '不知道，无解'
        }).catch(err => {
          console.log(err)
          this.answer = '接口挂了...'
        })
      },
      1000
    )
  }
}
</script>
