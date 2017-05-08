
<style lang="less" scoped>
    .index {
        width:500px;
        height:300px;
        background:red;
        position:relative;
    }
</style>

<template>
    <div class="index" >
        <p>这是组件A 背景颜色是 红色(组件A 包含组件B)</p>
        <component-B></component-B>
    </div>
</template>

<script>
    import ComponentB from 'vue/B.vue';
            // @require '../less/other2.less';
            export default {
            components: {
            ComponentB,
            },
                    created() {
            console.log('Index page created!');
            },
                    methods: {
                    //
                    }
            }
</script>
