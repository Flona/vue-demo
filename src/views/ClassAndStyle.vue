<template>
  <div>
    <p :class="{red: isred, bold: isbold}">对象语法</p>
    <p class="static" :class="{red: isred, bold: isbold}">对象语法与class共存</p>
    <p :class="classObject">对象语法非内联</p>
    <button @click="changeClassObject">切换对象语法非内联object单个属性值可以触发重新渲染</button>
    <p :class="computedClassObject">返回对象的计算属性</p>
    <p :class="['red', 'bold']">数组语法</p>
    <p :class="[isred ? 'red' : '', isbold ? 'bold' : '']">数组条件切换用三元表达式</p>
    <p :class="[{red: isred}, 'bold']">简化三元表达式使用数组结合对象方式</p>
    <p :style="{'font-size': '18px', fontWeight: 'bold', color: styleObject.color}">内联样式对象语法</p>
    <button @click="changeStyleObject">切换styleObject.color</button>
    <p :style="styleObject">内联样式直接绑定styleObject</p>
    <p :style="computedStyleObject">内联样式对象语法绑定计算属性</p>
    <p :style="[styleObject, styleObject2]">内联样式数组语法绑定多个styleObject</p>
    <p :style="{'font-smoothing': 'antialiased'}">自动添加前缀</p>
  </div>
</template>

<script>
export default{
  data () {
    return {
      isred: true,
      isbold: true,
      classObject: {
        red: true,
        bold: false
      },
      styleObject: {
        color: '#64b587',
        'font-weight': 'bold'
      },
      styleObject2: {
        color: 'pink',
      }
    }
  },
  computed: {
    computedClassObject: function () {
      return {
        red: this.isred && false,
        bold: this.isbold || false
      }
    },
    computedStyleObject: function () {
      return {
        color: this.isred ? 'grey' : '#64b587',
        fontWeight: this.isbold ? 'bold' : 'normal'
      }
    }
  },
  methods: {
    changeClassObject: function () {
      this.classObject.red = !this.classObject.red
    },
    changeStyleObject: function () {
      this.styleObject.color = this.styleObject.color === '#64b587' ? 'grey' : '#64b587'
    }
  }
}
</script>

<style scoped>
  .static{
    font-size: 18px;
    color: grey;
  }
  .red{
    color: #64b587;
  }
  .bold{
    font-weight: bold;
  }
</style>
