<template>
    <div>
        <h2>{{ num1 }} + {{ num2 }} = {{ num1+num2 }}</h2>
    </div>
</template>

<script>
export default {
    name: 'Exam2Child',
    props: {
        num1: Number,
        num2: Number,
    }
}
</script>

<style scoped>
    div { background-color: aquamarine; }
</style>