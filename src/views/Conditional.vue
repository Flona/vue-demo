<template>
  <div>
    <button @click="changeIf">切换isif</button>
    <p v-if="isif">v-if</p>
    <p v-else-if="iselseif">v-else-if在v-if满足时不会满足</p>
    <p v-else>v-else</p>
    <template v-if="isif">
      <p>template1</p>
      <p>template2</p>
    </template>
    <template>
      <input v-if="keytest" type="text" name="name" placeholder="name">
      <input v-else type="text" name="email" placeholder="email">
      <button @click="changeKeytest">{{keytype}}(尽可能高效渲染input不会重新渲染只是改了placeholder，所谓的可复用元素)</button>
    </template>
    <template>
      <input v-if="keytest" type="text" name="name" placeholder="name" key="name">
      <input v-else type="text" name="email" placeholder="email" key="email">
      <button @click="changeKeytest">{{keytype}}(key使其完全独立不复用)</button>
    </template>
    <p v-show="isshow">v-show切换css的display，高初始渲染开销，低切换开销，不能使用template</p>
    <p v-if="isif">v-if真正的条件渲染，低初始渲染开销，高切换开销</p>
  </div>
</template>

<script>
export default{
  data () {
    return {
      isif: true,
      iselseif: true,
      isshow: true,
      keytest: true,
      keytype: 'name'
    }
  },
  methods: {
    changeIf: function () {
      this.isif = !this.isif
    },
    changeKeytest: function () {
      this.keytest = !this.keytest
      this.keytype = this.keytype === 'name' ? 'email' : 'name'
    }
  }
}
</script>

<style scoped>
  p{
    color: #64b587;
  }
</style>
