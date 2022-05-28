<template>
    <div>
        <input type="text" v-model="title"><br/>
        <button type="button" @click="[$emit('send', title), go()]">OK</button>
    </div>
</template>

<script>
export default {
    name: 'Exam3Child',
    data() {
        return {
            title: ''
        }
    },
    methods: {
        go() {
            this.title = '';
        }
    }
}
</script>

<style scoped>
    div { background-color: aquamarine; }
    input { margin: 5px; }
</style>