<template>
  <div class="exam1">
    <h1>Exam3</h1>
    <h3>{{ title }}</h3>
    <Exam3Child v-on:send="show"/>
  </div>
</template>

<script>
import Exam3Child from '../components/Exam3Child.vue'
export default {
    components: {Exam3Child},
    data() {
        return {
            title: 'world'
        }
    },
    methods: {
        show(value) {
            this.title = value;
        }
    }
}
</script>