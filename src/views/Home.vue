<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Demo Links</h2>
    <ul>
      <li v-for="item in linkList" :key="item.link">
        <router-link :to="item.link">
          {{item.title}}
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Vue.js Demo',
      linkList: [
        { title: 'templateSyntax', link: '/templateSyntax' },
        {title: 'computedAndWatch', link: '/computedAndWatch'},
        {title: 'classAndStyle', link: '/classAndStyle'}
      ]
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
