<template>
  <div id="app">
    <Head v-model="titlename"></Head>
    <router-view v-on:footer="footer" v-on:getdata="getdata"></router-view>
    <Footer v-if="footer_show"></Footer>
  </div>
</template>
<script>
import Head from './components/common/Head'
import Footer from './components/common/Footer'
export default {
  name: "App",
  data(){
    return {
      head_show:true,
      footer_show:true,
      titlename:"欢迎光临"
    }
  },
  components:{
    'Footer':Footer,
    'Head':Head
  },
  methods: {
    footer:function (bool) {
        this.footer_show = bool;
    },
    getdata:function(data){
      this.titlename=data
    }
  },
};
</script>
<style >
  #input{
    width: 100px;
    border: 1px solid green!important;
    margin-top: 300px;
    background-color: #ddd;
  }
</style>