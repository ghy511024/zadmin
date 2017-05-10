<template>
    <div class="B">
        我是组件B 颜色是蓝色
    </div>
</template>

<script>
    module.exports = {
        created() {
            console.log('组件B 加载完成');
        },
        methods: {
            //
        }
    }
</script>

<style lang="less" scoped>
    .B {
        position: absolute;
        width: 300px;
        height: 100px;
        left: 50%;
        margin-left: -150px;
        top: 50px;
        background: blue;
        color: yellow;
    }
</style>
