<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Vue from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import regexputilsjs from '../packages/index.js';
Vue.use(regexputilsjs);

export default {
  name: 'App',
  mounted() {
  	console.log(this.$regexputilsjs.numberRegexp.replace('asd12312'));
  },
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
