<template>
  <div class="exam1">
    <h1>Exam1</h1>
    <input type="text" v-model="title" >
    <Exam1Child v-bind:title="title"/>
  </div>
</template>

<script>
import Exam1Child from '../components/Exam1Child.vue'
export default {
  components: {Exam1Child},
  data() {
    return {
      title: '안녕하세요'
    }
  },
}
</script>
