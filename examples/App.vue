<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
	<input v-model="value" @input="change"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import Regexp from '../packages/index';
Vue.use(Regexp);

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {
	/* 参数 */
	public value: string = "";
	
	/* 生命周期 */
	private mounted(){
		console.log(this.$RegExp.emailRegexp.replace('a123123ads123123asd123'));
	}
	
	/* 方法 */
	private change (value){
		this.value = this.$RegExp.numberRegexp.replace(this.value).toString();
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
