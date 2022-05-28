<template>
  <div class="exam1">
    <h1>Exam4</h1>
    <h3 v-show="flag">{{num1}} * {{num2}} = {{res}}</h3>
    <Exam4Child v-on:send="show"/>
  </div>
</template>

<script>
import Exam4Child from '../components/Exam4Child.vue'
export default {
    components: {Exam4Child},
    data() {
        return {
            num1: '',
            num2: '',
            res: '',
            flag: false,
        }
    },
    methods: {
        show(value, value2) {
            this.num1 = value;
            this.num2 = value2;
            this.flag = true;
            this.res = value * value2;
        }
    }
}
</script>