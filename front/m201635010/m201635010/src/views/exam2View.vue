<template>
  <div class="exam1">
    <h1>Exam2</h1>
    <input type="number" v-model="num1"><br/>
    <input type="number" v-model="num2"><br/>
    <Exam2Child v-show="num1" v-bind:num1="num1" v-bind:num2="num2" />
  </div>
</template>

<script>
import Exam2Child from '../components/Exam2Chile.vue'
export default {
    components: {Exam2Child},
    data() {
        return {
            num1: '',
            num2: '',
        }
    }
}
</script>
