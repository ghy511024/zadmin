__inline("B.vue");
__inline("A.vue");
var app = new Vue({
  el: '#app',
  methods: {


  },
  components: {
//    Index: ghy,
     App: require('vue/A.vue')["default"]
  },
  created() {
    console.log('created');
  }
});