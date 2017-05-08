

<template name="haha">
    <div id="xxx">
        <h1>我的等级{{level1}}</h1>
        <h1>我的名字{{uname1}}</h1>
    </div>
</template>

<style lang="scss" scoped>
    #xxx{
        margin:0px;
    }
</style>

<script type="text/javascript">

    module.exports = {
        data: function () {
            return {
                level1: "xxx"
            }
        }, name: "test"
    }

    var app = new Vue({
        el: "#app",
        data: {
            title: "我是一个标题",
            list: [
                {text: "111"},
                {text: "222"}
            ],
            isboy: true
        }
    })
</script>