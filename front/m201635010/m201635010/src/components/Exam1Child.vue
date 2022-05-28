<template>
    <div>
        <h2>{{ title }}</h2>
    </div>
</template>

<script>
export default {
    name: 'Exam1Child',
    props: ['title']
}
</script>

<style scoped>
    div { background-color: aquamarine; }
</style>