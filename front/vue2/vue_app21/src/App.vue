<template>
  <img alt="Vue logo" src="./assets/logo.png">
    <MyCounter2 title="카운터2" description="첫째 컴포넌트" color="#ffb"  v-on:send="showValue" />
    <MyCounter2 title="카운터2" color="#afa"  v-on:send="showValue" />
</template>

<script>
import MyCounter2 from './MyCounter2.vue'
export default {
  name: 'App',
    methods: {
    showValue(value) {
      alert(value);
    }
  },
  components: {
    MyCounter2
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
