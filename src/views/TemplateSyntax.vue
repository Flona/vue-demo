<template>
  <div>
    <input name="test" v-model="msg">
    <p>{{msg}}</p>
    <p v-once>{{msg}}</p>
    <p v-html="html">test</p>
    <p>test <span v-html="html">no</span></p>
    <button disabled=undefined>test v-bind1</button>
    <button disabled=null>test v-bind2</button>
    <button disabled=false>test v-bind3</button>
    <button disabled=true>test v-bind4</button>
    <button :disabled="disabled1">test v-bind5</button>
    <button :disabled="disabled2">test v-bind5</button>
    <button :disabled="disabled3">test v-bind5</button>
    <button :disabled="disabled4">test v-bind5</button>
    <p>{{globalVariable1?globalVariable1:'访问不到自定义的全局变量'}}</p>
    <p>{{Math.max(1,2,3)+'-可以访问原有的全局变量'}}</p>
    <a :href="url">test :</a>
    <a :href="url" @click.prevent="clickButton" >test prevent</a>
  </div>
</template>

<script>
window.globalVariable1 = 'xiaohei'
export default{
  data () {
    return {
      msg: 'xiaohei',
      html: '<span style="color:red">red</span>',
      disabled1: null,
      disabled2: undefined,
      disabled3: false,
      disabled4: true,
      url: 'http://www.yvonne.party'
    }
  },
  methods: {
    clickButton: function () {
      console.log('click!')
    }
  }
}
</script>
