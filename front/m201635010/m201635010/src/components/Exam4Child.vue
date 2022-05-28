<template>
    <div>
        <input type="number" v-model="num1"><br/>
        <input type="number" v-model="num2"><br/>
        <button type="button" @click="$emit('send', num1, num2)">OK</button>
    </div>
</template>

<script>
export default {
    name: 'Exam4Child',
    data() {
        return {
            num1: Number,
            num2: Number,
        }
    }
}
</script>

<style scoped>
    div { background-color: aquamarine; }
    input { margin: 10px;}
</style>