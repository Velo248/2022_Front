<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <MyCheckbox3 />
  <MyButton1 />
  <MySelect3 />
</template>

<script>
import MyCheckbox3 from './MyCheckbox3.vue'
import MyButton1 from './MyButton1.vue'
import MySelect3 from './MySelect3.vue'
export default {
  name: 'App',
  components: {
    MyCheckbox3,
    MyButton1,
    MySelect3
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
