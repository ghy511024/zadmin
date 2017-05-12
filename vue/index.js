__inline("B.vue");
__inline("A.vue");

var app = new Vue({
    el: '#app',
    methods: {},
    components: {
        App: require('vue/A.vue')["default"]
    },
    created() {
        console.log('主页加载完成');
    }
});