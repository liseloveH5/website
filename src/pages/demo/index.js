const index = {
  name: 'demo',

  data() {
    return {

    }
  },

  // 挂载之后 相当于原来的ready
  mounted: function () {
    this.$nextTick(function () {
      // 保证 this.$el 已经插入文档
    })
  },

  /* watch: {
     // 如果路由有变化，会再次执行该方法
     '$route': 'routerChange'
   },*/

  methods: {
    clickme:function(){
      let options = {
        type : 'error', // ['success', 'info', 'error']
        icon : 'error_outline',
        position: "top-center",
        duration : 2000
      };
      this.$toasted.show('hello billo', options)
    }

  }

};

export default index;
