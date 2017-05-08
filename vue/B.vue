<template>
    <div class="component-b">
        我是组件B 颜色是蓝色
    </div>
</template>

<script>
    module.exports = {
    created() {
    console.log('component a created !');
    },
            methods: {
            //
            }
    }
</script>

<style lang="less" scoped>
    .component-b {
        position:absolute;
        width:300px;
        height:100px;
        left:50%;
        margin-left:-150px;
        top:50px;
        background:blue;
        color:yellow;
    }
</style>
