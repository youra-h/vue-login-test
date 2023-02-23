<template lang="html">
    <div>
        <h1>{{title}}</h1>
        <button type="button" name="button" @click="setTitle()">Кнопка</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'О нас'
        }
    },
    methods: {
        setTitle() {
            this.title = Math.random(1000);
            console.log(this.title);
        }
    }
}
</script>

<style lang="css" scoped>

</style>
