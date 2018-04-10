<template>
  <div>
    <ul>
      <li v-for="(item, index) in arrList" :key="index+'in-arr'">(in-arr)item</li>
      <li v-for="(item, index) of arrList" :key="index+'of-arr'">(of-arr)item</li>
      <li class="divider">---------------the divider-----------------</li>
      <li v-for="(value, key, index) in objList" :key="index+'in-obj'">in-obj-{{value}}-{{key}}-{{index}}</li>
      <li v-for="(value, key, index) of objList" :key="index+'of-obj'">of-obj-{{value}}-{{key}}-{{index}}</li>
      <li class="divider">---------------the divider-----------------</li>
      <li v-for="(item, index) of keyTest" :key="index+'arr-key'">arr-key-{{item}}-{{index}}</li>
    </ul>
    <button @click="push">push</button>
    <button @click="pop">pop</button>
    <button @click="unshift">unshift</button>
    <button @click="shift">shift</button>
    <button @click="reverse">reverse</button>
    <button @click="sort">sort</button>
    <button @click="splice">splice</button>
    <button @click="filter">非变异方法</button>
    <button @click="chengeLength">chengeLength不能检测变动</button>
    <button @click="chengeItem">chengeItem不能检测变动</button>
    <button @click="set">vm.$set</button>
    <p class="divider">---------------the divider-----------------</p>
    <ul>
      <li v-for="(value, key) in objTest" :key="value">{{key}}-{{value}}</li>
    </ul>
    <button @click="changeObjItem">changeObjItem不能检测变动</button>
    <button @click="objSet">vm.$set</button>
    <button @click="objAssign1">assign设置多个属性不能检测变动</button>
    <button @click="objAssign2">assign设置多个属性赋值写法</button>
    <p class="divider">---------------the divider-----------------</p>
    <ul>
      <li v-for="n in 10" :key="n+'n'">{{n}}-n in 10取整数</li>
      <template v-for="n in 3">
        <li :key="n+'0'">v-for-template-{{n}}-0</li>
        <li :key="n+'1'">v-for-template-{{n}}-1</li>
      </template>
    </ul>
  </div>
</template>

<script>
export default{
  data () {
    return {
      arrList: [1, 2, 3, 4, 5],
      objList: {name: 'xiaohei', age: 25},
      keyTest: [1, 2, 3],
      objTest: {name: 'xiaohei', age: 27}
    }
  },
  methods: {
    push: function () {
      this.keyTest.push(this.keyTest.length + 1)
    },
    pop: function () {
      this.keyTest.pop()
    },
    unshift: function () {
      this.keyTest.unshift(this.keyTest.length + 1)
    },
    shift: function () {
      this.keyTest.shift()
    },
    reverse: function () {
      this.keyTest.reverse()
    },
    sort: function () {
      this.keyTest.sort()
    },
    splice: function () {
      this.keyTest.splice(0, 1, this.keyTest.length + 1)
    },
    filter: function () {
      this.keyTest = this.keyTest.filter(function (item, index, arr) {
        return item % 2
      })
    },
    chengeLength: function () {
      this.keyTest.length = 1
    },
    chengeItem: function () {
      this.keyTest[0] = NaN
    },
    set: function () {
      this.$set(this.keyTest, 0, NaN)
    },
    changeObjItem: function () {
      this.objTest.sex = 'femal'
    },
    objSet: function () {
      this.$set(this.objTest, 'sex', 'femal')
    },
    objAssign1: function () {
      Object.assign(this.objTest, {
        'email': '1245',
        'phone': '6878'
      })
    },
    objAssign2: function () {
      this.objTest = Object.assign({}, this.objTest, {
        'email': '1245',
        'phone': '6878'
      })
    }
  }
}
</script>

<style scoped>
 ul{
   list-style: none;
 }
 li{
   text-align: left;
   color: #64b587;
 }
 li.divider{
  color: grey;
  text-align: center;
 }
</style>
